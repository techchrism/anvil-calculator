import {SelectedEnchantment} from "./components/EnchantmentSelection";
import {
    CombinationResult,
    ComboItem, ComboWorkerRequest,
    ComboWorkerResponseMessage,
    EnchantmentData
} from "./enchantmentTypes";

let comboJobID = 0

export async function calculateEnchantments(itemID: string,
                         selectedEnchantments: SelectedEnchantment[],
                         enchantmentData: EnchantmentData,
                         progressCallback?: Function,
                         abortSignal?: AbortSignal): Promise<CombinationResult> {
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

    const comboWorker = new Worker(new URL('./worker/worker.ts', import.meta.url))

    return new Promise((resolve, reject) => {
        const id = comboJobID
        comboJobID++
        comboWorker.postMessage(<ComboWorkerRequest> {
            id,
            items
        })

        const messageHandler = (e: MessageEvent) => {
            const type = (e.data as ComboWorkerResponseMessage).type
            if(type === 'progress' && progressCallback !== undefined) {
                progressCallback(e.data.progress)
            } else if(type === 'result') {
                resolve(e.data.result)
                comboWorker.removeEventListener('message', messageHandler)
            }
        }
        comboWorker.addEventListener('message', messageHandler)

        if(abortSignal !== undefined) {
            abortSignal.addEventListener('abort', () => {
                comboWorker.terminate()
                reject(abortSignal.reason)
            })
        }
    })
}
