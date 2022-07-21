import type {Component} from 'solid-js';
import {createResource, createSignal, For, Show} from "solid-js";
import {EnchantmentData, EnchantmentVersions, Item} from "../enchantmentTypes";

import {VersionSelection} from "./VersionSelection";
import {ItemSelection} from "./ItemSelection";
import {EnchantmentSelection, SelectedEnchantment} from "./EnchantmentSelection";
import {CombinationResult, ComboItem, findOptimalCombination} from "../comboFinder";

async function loadEnchantmentData(version: string): Promise<EnchantmentData> {
    return await (await fetch(`https://techchrism.github.io/enchantment-json-exporter/versions/${version}.json`)).json()
}

async function loadVersions(): Promise<EnchantmentVersions> {
    return await (await fetch('https://techchrism.github.io/enchantment-json-exporter/versions.json')).json()
}

function calculate(itemID: string, selectedEnchantments: SelectedEnchantment[], enchantmentData: EnchantmentData): CombinationResult {
    const items: ComboItem[] = selectedEnchantments.map(selected => {
        const enchantment = enchantmentData.enchantments.find(enchantment => enchantment.id === selected.id)
        const rarity = enchantmentData.rarities.find(rarity => rarity.name === enchantment.rarity)

        return {
            book: true,
            work: 0,
            cost: 0,
            totalCost: 0,
            value: rarity.book_cost,
            from: [],
            id: enchantment.id
        }
    })
    items.push({
        book: false,
        work: 0,
        cost: 0,
        totalCost: 0,
        value: 0,
        from: [],
        id: itemID
    })

    return findOptimalCombination(items)
}

const App: Component = () => {
    const [selectedVersion, setSelectedVersion] = createSignal<string>()
    const [selectedItem, setSelectedItem] = createSignal<Item>()
    const [selectedEnchantments, setSelectedEnchantments] = createSignal<SelectedEnchantment[]>([])
    const [comboResult, setComboResult] = createSignal<CombinationResult>()

    const [versionsData] = createResource(loadVersions)
    const [enchantmentData] = createResource(selectedVersion, loadEnchantmentData)

    const availableEnchantments = () => {
        if(selectedItem() === undefined || enchantmentData() === undefined) return []
        return enchantmentData().enchantments.filter(enchantment => {
            return enchantment.secondary_items.some(item => item.id === selectedItem().id) ||
                enchantmentData().categories.find(category => category.name === enchantment.category).items.some(item => item.id === selectedItem().id)
        })
    }

    const calculateSelected = () => {
        setComboResult(calculate(selectedItem().id, selectedEnchantments(), enchantmentData()))
        console.log(comboResult())
    }

    return (
        <>
            <div class="p-20">
                <Show when={!versionsData.loading}>
                    <VersionSelection versions={versionsData()} setSelectedVersion={setSelectedVersion}/>

                    <Show when={enchantmentData() !== undefined} fallback={<>Loading...</>}>
                        <p class="text-4xl text-green-700 text-center py-20">
                            Enchantment data is version {enchantmentData().version} from {enchantmentData().exporter_version} with {enchantmentData().enchantments.length} enchantments
                        </p>

                        <ItemSelection enchantmentData={enchantmentData()} setSelectedItem={setSelectedItem}/>

                        <Show when={availableEnchantments().length > 0}>
                            <EnchantmentSelection availableEnchantments={availableEnchantments()} selectedEnchantments={selectedEnchantments()} setSelectedEnchantments={setSelectedEnchantments}/>
                            <For each={selectedEnchantments()} children={(selected) => {
                                return (
                                    <>
                                        <p>{selected.id} {selected.level}</p>
                                    </>
                                )
                            }}/>
                            <button onclick={calculateSelected}>Calculate</button>
                        </Show>
                    </Show>
                </Show>
            </div>
        </>
    );
};

export default App;
