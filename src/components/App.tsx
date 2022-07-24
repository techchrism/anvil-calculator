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
            <div class="p-20">
                <Show when={!versionsData.loading}>
                    <VersionSelection versions={versionsData()} setSelectedVersion={setSelectedVersion}/>

                    <Show when={enchantmentData() !== undefined} fallback={<>Loading...</>}>
                        <ItemSelection enchantmentData={enchantmentData()} setSelectedItem={setSelectedItem}/>

                        <Show when={availableEnchantments().length > 0}>
                            <EnchantmentSelection availableEnchantments={availableEnchantments()} selectedEnchantments={selectedEnchantments()} setSelectedEnchantments={setSelectedEnchantments}/>
                            <CalculateButton item={selectedItem()}
                                             selectedEnchantments={selectedEnchantments()}
                                             enchantmentData={enchantmentData()}
                                             setResults={setComboResult}/>

                            <Show when={comboResult() !== null}>
                                <CombinationDisplay combo={comboResult()}/>
                            </Show>
                        </Show>
                    </Show>
                </Show>
            </div>
        </>
    );
};

export default App;
