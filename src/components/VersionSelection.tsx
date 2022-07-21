import {createSignal, Setter} from "solid-js";
import {EnchantmentDataVersion, EnchantmentVersions} from "../enchantmentTypes";
import {createOptions, Select} from "@thisbeyond/solid-select";

import "@thisbeyond/solid-select/style.css";

export interface IVersionSelectionProps {
    versions: EnchantmentVersions
    setSelectedVersion: Setter<EnchantmentDataVersion>
}

export function VersionSelection(props: IVersionSelectionProps) {
    const [showSnapshots, setShowSnapshots] = createSignal(false)

    const versionSelectionOptions = () => {
        let versions = props.versions.listings
        if(!showSnapshots()) {
            versions = versions.filter(version => version.type === 'release')
        }
        return createOptions(versions, {key: 'id'})
    }
    const initialVersion = () => props.versions.listings.find(version => version.id === props.versions.latest.release)

    return (
        <div class="w-max">
            <label for="version-select" class="font-semibold">Minecraft Version</label>
            <Select {...versionSelectionOptions()}
                    initialValue={initialVersion()}
                    onChange={(selected) => props.setSelectedVersion(selected)}
                    class="bg-white"
                    id="version-select"
            />

            <div class="flex">
                <input type="checkbox" id="snapshot-checkbox" class="mr-2 self-center" onChange={(e) => setShowSnapshots(e.currentTarget.checked)}/>
                <label for="snapshot-checkbox">Show Snapshots</label>
            </div>
        </div>
    )
}
