import {CombinationResult, ComboItem} from "../enchantmentTypes";
import {For} from "solid-js";

export interface ICombinationDisplayProps {
    combo: CombinationResult
}

export interface ComboColumnMeta {
    color: string
    text: string
}

export interface ComboColumn {
    depth: number
    meta?: ComboColumnMeta
}

export interface Row {
    name: string
    comboColumns: ComboColumn[]
}

function combineRows(first: Row[], second: Row[], result: ComboItem): Row[] {
    let combined = [...first, ...second]
    // Add to the first item of "first" and cancel every other
    for(let i = 0; i < combined.length; i++) {
        if(i === 0) {
            combined[i].comboColumns.push({
                depth: first.length + second.length,
                meta: {
                    text: result.cost.toString(),
                    color: 'white'
                }
            })
        } else {
            combined[i].comboColumns.push({depth: 0})
        }

    }
    return combined
}

function generateFrom(item: ComboItem): Row[] {
    if(item.from.length === 0) {
        return [{name: item.base.displayName, comboColumns: []}]
    } else {
        return combineRows(generateFrom(item.from[0]), generateFrom(item.from[1]), item)
    }
}

export function CombinationDisplay(props: ICombinationDisplayProps) {
    const tableData = () => {
        const table = generateFrom(props.combo.optimalCombination)
        return {
            table,
            columnCount: table[0].comboColumns.length
        }
    }

    return (
        <>
            <table class="border-collapse border-black">
                <caption class="font-semibold">{props.combo.optimalCombination.totalCost} levels needed</caption>
                <For each={tableData().table} children={(row) => {
                    return (
                        <tr class="border border-black">
                            <td class="border border-r-0 border-black px-2" colspan={(tableData().columnCount - row.comboColumns.length) + 1}>
                                {row.name}
                            </td>
                            <For each={row.comboColumns.filter(col => col.depth !== 0)} children={(column) => {
                                return (
                                    <td class="border px-2 border-black font-semibold text-center" style={{"background-color": column.meta.color}} rowspan={column.depth}>
                                        {column.meta.text}
                                    </td>
                                )
                            }}/>
                        </tr>
                    )
                }}/>
                <caption style="caption-side: bottom;" class="font-light text-sm">
                    Checked {props.combo.combinationsChecked.toLocaleString()} combinations in {props.combo.timeTakenMillis.toLocaleString()}ms
                </caption>
            </table>
        </>
    )
}
