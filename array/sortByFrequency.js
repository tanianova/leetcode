// нужно вернуть уникальный массив, отсортированный по частоте встречаемости

function sortByFrequency(arr) {
    const obj = new Map()
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        if (obj.has(curr)) {
            obj.set(curr, obj.get(curr) + 1)
        }else{
            obj.set(curr, 1)
        }
    }
    return [...obj.keys()].sort((a, b) => obj.get(b) - obj.get(a))
}

const arr = [1, 1, 2, 2, 2, 5, 5, 5, 2, 7]
console.log(sortByFrequency(arr))