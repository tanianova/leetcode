// Дан массив чисел. Необходимо отсортировать нечетные числа по возрастанию, оставив четные числа на своих местах.

function oddSort(numbers) {
    // Собираем индексы нечетных чисел и их значения
    const oddIndices = [];
    const oddValues = [];

    for (let i = 0; i < numbers.length; i++){
        const curr = numbers[i]
        if (curr % 2 !== 0) {
            oddValues.push(curr);
            oddIndices.push(i)
        }
    }
    oddValues.sort((a, b) => a - b);
    for (let i = 0; i < oddIndices.length; i++){
        const curr = oddIndices[i];
        numbers[curr] = oddValues[i]
    }

    return numbers;
}

console.log(oddSort([2, 3, 7, 4, 6, 1, 5, 8, 9])); // \[2, 1, 3, 4, 6, 5, 7, 8, 9\]
console.log(oddSort([2, 4, 6, 8])); // \[2, 4, 6, 8\]
console.log(oddSort([3, 7, 1, 5, 9])); // \[1, 3, 5, 7, 9\]