import {Enchantment} from "../enchantmentTypes"
import {createEffect, For, Setter, Show} from "solid-js";

export interface IEnchantmentSelectionProps {
    availableEnchantments: Enchantment[]
    selectedEnchantments: SelectedEnchantment[]
    setSelectedEnchantments: Setter<SelectedEnchantment[]>
}

export interface SelectedEnchantment {
    id: string,
    level: number
}

// From https://stackoverflow.com/a/9083076
function romanize(num) {
    if (isNaN(num))
        return NaN;
    const digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"]
    let roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

export function EnchantmentSelection(props: IEnchantmentSelectionProps) {
    const enchantments = () => props.availableEnchantments.map(enchantment => {
        const levels = [...Array(enchantment.max_level - enchantment.min_level + 1).keys()].map(i => ({
            text: romanize(i + 1),
            value: i + 1
        })).reverse()
        const incompatible = enchantment.incompatible.filter(incompatible => props.availableEnchantments.some(check => check.id === incompatible))
        return {
            ...enchantment,
            incompatible,
            levels,
            defaultLevel: (enchantment.is_curse || incompatible.length > 0) ? 0 : enchantment.max_level
        }
    }).sort((a, b) => b.max_level - a.max_level)

    createEffect(() => {
        props.setSelectedEnchantments(enchantments().filter(enchantment => enchantment.defaultLevel > 0).map(enchantment => ({
            id: enchantment.id,
            level: enchantment.defaultLevel
        })))
    })

    const onEnchantmentSelect = (e: Event & { currentTarget: HTMLSelectElement; target: Element; }, id: string) => {
        props.setSelectedEnchantments(prev => {
            // Remove existing enchantment selection
            let other = (prev === undefined) ? [] : prev.filter(prevSelected => prevSelected.id !== id)

            const level = parseInt(e.currentTarget.value)
            if(level > 0) {
                other.push({level, id})

                // Deselect incompatible
                const incompatible = enchantments().find(enchantment => enchantment.id === id).incompatible
                other = other.filter(selected => !incompatible.includes(selected.id))
            }
            return other
        })
    }

    return (
        <>
            <table class="border-separate border-spacing-x-2">
                <tbody>
                    <For each={enchantments()} children={(enchantment) => {
                        return (
                            <tr>
                                <td class="w-5">
                                    <Show when={enchantment.incompatible.length > 0} children={() => {
                                        return (
                                            <div class="font-bold w-full text-center underline decoration-dotted" title={`Incompatible with ${
                                                enchantment.incompatible
                                                    .map(incompatible => enchantments().find(enchantment => enchantment.id === incompatible).name)
                                                    .join(', ')
                                            }`}>*</div>
                                        )
                                    }}/>
                                </td>
                                <td>
                                    {enchantment.name}
                                </td>
                                <td>
                                    <select class="w-10" onChange={(e) => onEnchantmentSelect(e, enchantment.id)}>
                                        <option value="0" selected={!props.selectedEnchantments.some(selected => selected.id === enchantment.id)}>-</option>
                                        <For each={enchantment.levels} children={(level) => {
                                            return (
                                                <option value={level.value} selected={props.selectedEnchantments.some(
                                                    selected => selected.id === enchantment.id && selected.level === level.value
                                                )}>
                                                    {level.text}
                                                </option>
                                            )
                                        }}/>
                                    </select>
                                </td>
                            </tr>
                        )
                    }}/>
                </tbody>
            </table>
        </>
    )
}
