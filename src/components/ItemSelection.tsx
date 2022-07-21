import {EnchantmentData, Item} from "../enchantmentTypes";
import {Setter} from "solid-js";
import {createOptions, Select} from "@thisbeyond/solid-select";

export interface IItemSelectionProps {
    enchantmentData: EnchantmentData
    setSelectedItem: Setter<Item>
}

export function ItemSelection(props: IItemSelectionProps) {
    const items = props.enchantmentData.categories.reduce((acc, category) => {
        return acc.concat(category.items.filter(item => !acc.some(check => check.id === item.id)))
    }, []).sort((a, b) => a.name.localeCompare(b.name))
    const selectOptions = createOptions(items, {
        key: 'name'
    })

    return (
        <>
            <div class="w-max">
                <label for="item-select" class="font-semibold">Item to Enchant</label>
                <Select {...selectOptions}
                        placeholder="Select an Item..."
                        onChange={(selected) => props.setSelectedItem(selected)}
                        class="bg-white"
                        id="item-select"/>
            </div>
        </>
    )
}
