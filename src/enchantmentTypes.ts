export interface EnchantmentDataVersion {
    id: string,
    url: string,
    type: 'snapshot' | 'release',
    releaseTime: string
}

export interface EnchantmentVersions {
    latest: {
        release: string,
        snapshot: string
    },
    listings: EnchantmentDataVersion[]
}

export interface EnchantmentRarity {
    name: string,
    weight: number,
    item_cost: number,
    book_cost: number
}

export interface Item {
    id: string,
    name: string
}

export interface EnchantmentCategory {
    name: string,
    items: Item[]
}

export interface Enchantment {
    id: string,
    name: string,
    category: string,
    min_level: number,
    max_level: number,
    rarity: string,
    is_curse: boolean,
    is_discoverable: boolean,
    is_tradeable: boolean,
    is_treasure_only: boolean,
    incompatible: string[],
    secondary_items: Item[]
}

export interface EnchantmentData {
    version: string,
    exporter_version: string,
    rarities: EnchantmentRarity[],
    categories: EnchantmentCategory[],
    enchantments: Enchantment[]
}

export interface CombinationResult {
    timeTakenMillis: number,
    optimalCombination: ComboItem
}

export interface ComboItem {
    // If this item is a book or not
    book: boolean
    value: number
    work: number
    cost: number
    totalCost: number
    from: ComboItem[]
    id: string | null
}

export interface ComboWorkerRequest {
    id: number
    items: ComboItem[]
}

export interface ComboWorkerResponseMessage {
    type: 'progress' | 'result'
    id: number
}

export interface ComboWorkerProgressMessage extends ComboWorkerResponseMessage {
    // Number from 0 to 1
    progress: number
}

export interface ComboWorkerResultMessage extends ComboWorkerResponseMessage {
    result: CombinationResult
}
