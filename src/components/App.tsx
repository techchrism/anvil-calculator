import type {Component} from 'solid-js';
import {createResource, createSignal, Show} from "solid-js";
import {
    CombinationResult,
    EnchantmentData,
    EnchantmentDataVersion,
    EnchantmentVersions,
    Item
} from "../enchantmentTypes";

import {VersionSelection} from "./VersionSelection";
import {ItemSelection} from "./ItemSelection";
import {EnchantmentSelection, SelectedEnchantment} from "./EnchantmentSelection";
import {CalculateButton} from "./CalculateButton";
import {CombinationDisplay} from "./CombinationDisplay";

async function loadEnchantmentData(version: EnchantmentDataVersion): Promise<EnchantmentData> {
    return await (await fetch(version.url)).json()
}

async function loadVersions(): Promise<EnchantmentVersions> {
    return await (await fetch('https://techchrism.github.io/enchantment-json-exporter/versions.json')).json()
}

const App: Component = () => {
    const [selectedVersion, setSelectedVersion] = createSignal<EnchantmentDataVersion>()
    const [selectedItem, setSelectedItem] = createSignal<Item>()
    const [selectedEnchantments, setSelectedEnchantments] = createSignal<SelectedEnchantment[]>([])
    const [comboResult, setComboResult] = createSignal<CombinationResult>(null)

    const [versionsData] = createResource(loadVersions)
    const [enchantmentData] = createResource(selectedVersion, loadEnchantmentData)

    const availableEnchantments = () => {
        if(selectedItem() === undefined || enchantmentData() === undefined) return []
        return enchantmentData().enchantments.filter(enchantment => {
            return enchantment.secondary_items.some(item => item.id === selectedItem().id) ||
                enchantmentData().categories.find(category => category.name === enchantment.category).items.some(item => item.id === selectedItem().id)
        })
    }

    return (
        <>
            <div class="p-5 text-center text-lg">
                <h1 class="font-bold mb-3">Anvil Calculator</h1>

                <div class="flex flex-row justify-center gap-6 mb-3">
                    <Show when={!versionsData.loading} fallback={<p>Loading versions...</p>}>
                        <VersionSelection versions={versionsData()} setSelectedVersion={setSelectedVersion}/>
                    </Show>
                    <Show when={enchantmentData() !== undefined} fallback={<p>Loading enchantment data...</p>}>
                        <ItemSelection enchantmentData={enchantmentData()} setSelectedItem={setSelectedItem}/>
                    </Show>
                </div>

                <Show when={availableEnchantments().length > 0}>
                    <div class="flex flex-col gap-6 items-center">
                        <EnchantmentSelection availableEnchantments={availableEnchantments()} selectedEnchantments={selectedEnchantments()} setSelectedEnchantments={setSelectedEnchantments}/>

                        <CalculateButton item={selectedItem()}
                                         selectedEnchantments={selectedEnchantments()}
                                         enchantmentData={enchantmentData()}
                                         setResults={setComboResult}/>

                        <Show when={comboResult() !== null}>
                            <CombinationDisplay combo={comboResult()}/>
                        </Show>
                    </div>
                </Show>
            </div>
        </>
    );
};

export default App;
