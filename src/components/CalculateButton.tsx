import {SelectedEnchantment} from "./EnchantmentSelection";
import {CombinationResult, EnchantmentData, Item} from "../enchantmentTypes";
import {createEffect, createSignal, Setter} from "solid-js";
import {calculateEnchantments} from "../comboFinder";

export interface ICalculateButtonProps {
    item: Item
    selectedEnchantments: SelectedEnchantment[]
    enchantmentData: EnchantmentData
    setResults: Setter<CombinationResult>
}

interface OngoingOperation {
    promise: Promise<CombinationResult>
    abortController: AbortController
    started: number
}

type ButtonType = 'calculate' | 'cancel'

export function CalculateButton(props: ICalculateButtonProps) {
    const [progress, setProgress] = createSignal(0)
    const [ongoingOperation, setOngoingOperation] = createSignal<OngoingOperation>(null)

    const buttonType = (): ButtonType => (ongoingOperation() !== null) ? 'cancel' : 'calculate'

    const cancel = () => {
        setOngoingOperation(prev => {
            if(prev !== null) {
                prev.abortController.abort('cancelled')
            }
            return null
        })
    }

    const calculate = () => {
        const abortController = new AbortController()
        const promise = calculateEnchantments(
            props.item,
            props.selectedEnchantments,
            props.enchantmentData,
            setProgress,
            abortController.signal)

        promise.then(results => props.setResults(results))
            .catch(() => {})
            .finally(() => setOngoingOperation(null))
        setProgress(0)

        setOngoingOperation({
            promise,
            abortController,
            started: Date.now()
        })
    }

    const onButtonClick = () => {
        if(buttonType() === 'calculate') {
            calculate()
        } else {
            cancel()
        }
    }

    const buttonContent = () => {
        if(buttonType() === 'calculate') {
            return 'Calculate'
        } else {
            return `Cancel (${Math.round(progress() * 100)}%)`
        }
    }

    createEffect(() => {
        (props.selectedEnchantments)
        props.setResults(null)
        cancel()
    })

    return (
        <>
            {/* From https://tailwind-elements.com/docs/standard/components/buttons/ */}
            <button onclick={onButtonClick} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                {buttonContent()}
            </button>
        </>
    )
}
