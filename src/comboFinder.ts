import {SelectedEnchantment} from "./components/EnchantmentSelection";
import {CombinationResult, ComboItem, ComboWorkerResponseMessage, EnchantmentData} from "./enchantmentTypes";

export async function calculate(itemID: string,
                         selectedEnchantments: SelectedEnchantment[],
                         enchantmentData: EnchantmentData,
                         comboWorker: Worker,
                         progressCallback: Function): Promise<CombinationResult> {
    const items: ComboItem[] = selectedEnchantments.map(selected => {
        const enchantment = enchantmentData.enchantments.find(enchantment => enchantment.id === selected.id)
        const rarity = enchantmentData.rarities.find(rarity => rarity.name === enchantment.rarity)

        return {
            book: true,
            work: 0,
            cost: 0,
            totalCost: 0,
            value: rarity.book_cost * selected.level,
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

    return new Promise((resolve, reject) => {
        comboWorker.postMessage({
            items
        })

        const messageHandler = (e: MessageEvent) => {
            const type = (e.data as ComboWorkerResponseMessage).type
            if(type === 'progress') {
                progressCallback(e.data.progress)
            } else if(type === 'result') {
                resolve(e.data.result)
                comboWorker.removeEventListener('message', messageHandler)
            }
        }
        comboWorker.addEventListener('message', messageHandler)
    })
}
