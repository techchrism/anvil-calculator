import type {Component} from 'solid-js';
import {createResource, createSignal, For, Show} from "solid-js";
import {
    CombinationResult,
    ComboItem, ComboWorkerRequest, ComboWorkerResponseMessage,
    EnchantmentData,
    EnchantmentDataVersion,
    EnchantmentVersions,
    Item
} from "../enchantmentTypes";

import {VersionSelection} from "./VersionSelection";
import {ItemSelection} from "./ItemSelection";
import {EnchantmentSelection, SelectedEnchantment} from "./EnchantmentSelection";
import {calculate} from "../comboFinder";

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

    const calculateSelected = async () => {
        setComboResult(await calculate(selectedItem().id, selectedEnchantments(), enchantmentData(), comboWorker, (progress: number) => {
            console.log(`Progress is now ${progress}`)
        }))
        console.log(comboResult())
    }

    const comboWorker = new Worker(new URL('../worker/worker.ts', import.meta.url))

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
