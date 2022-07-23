import {SelectedEnchantment} from "./EnchantmentSelection";
import {CombinationResult, EnchantmentData} from "../enchantmentTypes";
import {createEffect, createSignal, Setter, Show} from "solid-js";
import {calculateEnchantments} from "../comboFinder";

export interface ICalculateButtonProps {
    itemID: string
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
            props.itemID,
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

    createEffect(() => {
        (props.selectedEnchantments)
        cancel()
    })

    return (
        <>
            <Show when={buttonType() === 'calculate'} children={() => {
                return (
                    <>
                        <button onclick={calculate}>
                            Calculate
                        </button>
                    </>
                )
            }}
            fallback={() => {
                return (
                    <>
                        <button onclick={cancel}>
                            Cancel ({Math.round(progress() * 100)}%)
                        </button>
                    </>
                )
            }}/>
        </>
    )
}
