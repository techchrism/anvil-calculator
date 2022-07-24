import {romanize, SelectedEnchantment} from "./components/EnchantmentSelection";
import {
    CombinationResult,
    ComboItem,
    ComboWorkerRequest,
    ComboWorkerResponseMessage,
    EnchantmentData,
    Item
} from "./enchantmentTypes";

let comboJobID = 0
let worker: Worker = null

export async function calculateEnchantments(item: Item,
                         selectedEnchantments: SelectedEnchantment[],
                         enchantmentData: EnchantmentData,
                         progressCallback?: Function,
                         abortSignal?: AbortSignal): Promise<CombinationResult> {
    const items: ComboItem[] = selectedEnchantments.map(selected => {
        const enchantment = enchantmentData.enchantments.find(enchantment => enchantment.id === selected.id)
        const rarity = enchantmentData.rarities.find(rarity => rarity.name === enchantment.rarity)
        let displayName = enchantment.name
        if(selected.level > 1) {
            displayName += ` ${romanize(selected.level)}`
        }

        return {
            book: true,
            work: 0,
            cost: 0,
            totalCost: 0,
            value: rarity.book_cost * selected.level,
            from: [],
            base: {
                id: enchantment.id,
                displayName
            }
        }
    })
    items.push({
        book: false,
        work: 0,
        cost: 0,
        totalCost: 0,
        value: 0,
        from: [],
        base: {
            id: item.id,
            displayName: item.name
        }
    })

    if(worker === null) {
        worker = new Worker(new URL('./worker/worker.ts', import.meta.url))
    }

    return new Promise((resolve, reject) => {
        const id = comboJobID
        comboJobID++
        worker.postMessage(<ComboWorkerRequest> {
            id,
            items
        })

        const messageHandler = (e: MessageEvent) => {
            const type = (e.data as ComboWorkerResponseMessage).type
            if(type === 'progress' && progressCallback !== undefined) {
                progressCallback(e.data.progress)
            } else if(type === 'result') {
                resolve(e.data.result)
                worker.removeEventListener('message', messageHandler)
            }
        }
        worker.addEventListener('message', messageHandler)

        if(abortSignal !== undefined) {
            abortSignal.addEventListener('abort', () => {
                worker.terminate()
                worker = null
                reject(abortSignal.reason)
            })
        }
    })
}
