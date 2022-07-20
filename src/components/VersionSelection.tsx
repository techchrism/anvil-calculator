import {Setter} from "solid-js";
import {EnchantmentVersions} from "../enchantmentTypes";
import {createOptions, Select} from "@thisbeyond/solid-select";

export interface IVersionSelectionProps {
    versions: EnchantmentVersions
    setSelectedVersion: Setter<string>
}

export function VersionSelection(props: IVersionSelectionProps) {
    const versionSelectionOptions = () => createOptions(props.versions.listings.map(version => version.id))
    const initialVersion = props.versions.latest.release

    return (
        <>
            <Select {...versionSelectionOptions()}
                    initialValue={initialVersion}
                    onChange={(selected) => props.setSelectedVersion(selected)}
            />
        </>
    )
}
