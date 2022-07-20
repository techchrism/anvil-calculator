import {createOptions, Select} from '@thisbeyond/solid-select';
import type {Component} from 'solid-js';
import {createEffect, createResource, createSignal, Show} from "solid-js";
import {EnchantmentData, EnchantmentVersions} from "./enchantmentTypes";

import "@thisbeyond/solid-select/style.css";

async function loadEnchantmentData(version: string): Promise<EnchantmentData> {
    return await (await fetch(`https://techchrism.github.io/enchantment-json-exporter/versions/${version}.json`)).json()
}

async function loadVersions(): Promise<EnchantmentVersions> {
    return await (await fetch('https://techchrism.github.io/enchantment-json-exporter/versions.json')).json()
}

const App: Component = () => {
    const [selectedVersion, setSelectedVersion] = createSignal<string>(null)
    const [initialVersion, setInitialVersion] = createSignal<string>(null)
    const [versionsData] = createResource(loadVersions)
    const [enchantmentData] = createResource(selectedVersion, loadEnchantmentData)
    createEffect(() => {
        if(!versionsData.loading && selectedVersion() === null) {
            setInitialVersion(versionsData().latest.release)
        }
    })

    const versionSelectionOptions = () => createOptions(versionsData().listings.map(version => version.id))

    return (
        <>
            <Show when={!versionsData.loading}>
                <Select {...versionSelectionOptions()}
                        initialValue={initialVersion()}
                        onChange={(selected) => setSelectedVersion(selected)}
                />
            </Show>
            <Show when={enchantmentData() !== undefined} fallback={<>Loading...</>}>
                <p class="text-4xl text-green-700 text-center py-20">
                    Enchantment data is version {enchantmentData().version} from {enchantmentData().exporter_version} with {enchantmentData().enchantments.length} enchantments
                </p>
            </Show>
        </>
    );
};

export default App;
