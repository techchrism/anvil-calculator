import type {Component} from 'solid-js';
import {createResource, createSignal, Show} from "solid-js";
import {EnchantmentData, EnchantmentVersions} from "../enchantmentTypes";

import "@thisbeyond/solid-select/style.css";
import {VersionSelection} from "./VersionSelection";

async function loadEnchantmentData(version: string): Promise<EnchantmentData> {
    return await (await fetch(`https://techchrism.github.io/enchantment-json-exporter/versions/${version}.json`)).json()
}

async function loadVersions(): Promise<EnchantmentVersions> {
    return await (await fetch('https://techchrism.github.io/enchantment-json-exporter/versions.json')).json()
}

const App: Component = () => {
    const [selectedVersion, setSelectedVersion] = createSignal<string>(null)

    const [versionsData] = createResource(loadVersions)
    const [enchantmentData] = createResource(selectedVersion, loadEnchantmentData)

    return (
        <>
            <div class="p-20">
                <Show when={!versionsData.loading}>
                    <VersionSelection versions={versionsData()} setSelectedVersion={setSelectedVersion}/>

                    <Show when={enchantmentData() !== undefined} fallback={<>Loading...</>}>
                        <p class="text-4xl text-green-700 text-center py-20">
                            Enchantment data is version {enchantmentData().version} from {enchantmentData().exporter_version} with {enchantmentData().enchantments.length} enchantments
                        </p>
                    </Show>
                </Show>
            </div>
        </>
    );
};

export default App;
