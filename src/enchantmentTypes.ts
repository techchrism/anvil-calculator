export interface EnchantmentVersions {
    latest: {
        release: string,
        snapshot: string
    },
    listings: {
        id: string,
        url: string,
        type: 'snapshot' | 'release',
        releaseTime: string
    }[]
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
    incompatible: string[]
}

export interface EnchantmentData {
    version: string,
    exporter_version: string,
    rarities: EnchantmentRarity[],
    categories: EnchantmentCategory[],
    enchantments: Enchantment[]
}
