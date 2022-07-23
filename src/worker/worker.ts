import {
    CombinationResult,
    ComboItem,
    ComboWorkerProgressMessage,
    ComboWorkerRequest,
    ComboWorkerResultMessage
} from "../enchantmentTypes";

function combine(left: ComboItem, right: ComboItem): ComboItem {
    const maxWork = Math.max(left.work, right.work)
    const cost = left.work + right.work + right.value
    return {
        book: left.book,
        value: left.value + right.value,
        work: maxWork + maxWork + 1,
        cost,
        totalCost: left.totalCost + right.totalCost + cost,
        from: [left, right],
        id: null
    }
}

function findOrders(items: ComboItem[], from: number, to: number): ComboItem[] {
    if(to - from === 1) {
        return [items[from]]
    } else {
        const ret = []
        for(let i = from + 1; i < to; i++) {
            const leftOrders = findOrders(items, from, i)
            const rightOrders = findOrders(items, i, to)

            for (let rightI = 0; rightI < rightOrders.length; rightI++) {
                if (!rightOrders[rightI].book) continue
                for (let leftI = 0; leftI < leftOrders.length; leftI++) {
                    ret.push(combine(leftOrders[leftI], rightOrders[rightI]))
                }
            }
        }
        return ret
    }
}

// From https://stackoverflow.com/a/37580979
function permute(permutation) {
    let length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

function findOptimalCombination(items: ComboItem[], progressCallback?: Function): CombinationResult {
    const startedTime = Date.now()
    let smallest = null

    const permutations = permute(items)

    const progressCount = 100
    const progressSize = permutations.length / progressCount
    let targetProgress = progressSize

    for(let i = 0; i < permutations.length; i++) {
        if(i > targetProgress && progressCallback !== null) {
            targetProgress += progressSize
            progressCallback(i / permutations.length)
        }

        const orders = findOrders(permutations[i], 0, items.length)
        let smallestBatch: ComboItem = null
        for(let orderI = 0; orderI < orders.length; orderI++) {
            if(smallestBatch === null || orders[orderI].totalCost < smallestBatch.totalCost) {
                smallestBatch = orders[orderI]
            }
        }
        if(smallestBatch === null) continue
        if(smallest === null || smallest.totalCost > smallestBatch.totalCost) {
            smallest = smallestBatch
        }
    }
    const endedTime = Date.now()
    return {
        timeTakenMillis: endedTime - startedTime,
        optimalCombination: smallest
    }
}

onmessage = (e) => {
    const request = e.data as ComboWorkerRequest

    const result = findOptimalCombination(request.items, progress => {
        postMessage(<ComboWorkerProgressMessage> {
            type: 'progress',
            id: request.id,
            progress
        })
    })

    postMessage(<ComboWorkerResultMessage> {
        type: 'result',
        id: request.id,
        result
    })
}
