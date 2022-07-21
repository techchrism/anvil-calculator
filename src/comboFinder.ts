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

function combine(left: ComboItem, right: ComboItem): ComboItem {
    const maxWork = Math.max(left.work, right.work)
    const cost = left.work + right.work + right.value
    return {
        book: left.book,
        value: left.value + right.value,
        work: maxWork + maxWork + 1,
        cost,
        totalCost: left.totalCost + right.totalCost + cost,
        //from: [left, right],
        from: [],
        id: null
    }
}

function findBestOrder(items: ComboItem[], from: number, to: number): ComboItem {
    if(to - from === 1) {
        return items[from]
    } else {
        let best = {
            left: null,
            right: null,
            cost: -1
        }
        for(let i = from + 1; i < to; i++) {
            const leftBest = findBestOrder(items, from, i)
            const rightBest = findBestOrder(items, i, to)
            if(leftBest === null || rightBest === null) continue
            if(!rightBest.book) continue

            const cost = leftBest.work + rightBest.work + rightBest.value
            if(best.cost === -1 || cost < best.cost) {
                best.left = leftBest
                best.right = rightBest
                best.cost = cost
            }
        }

        if(best.cost > -1) {
            return combine(best.left, best.right)
        }
        return null
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

export function findOptimalCombination(items: ComboItem[]): CombinationResult {
    const startedTime = Date.now()
    let smallest = null
    for(const perm of permute(items)) {
        const smallestBatch = findBestOrder(perm, 0, perm.length)
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
