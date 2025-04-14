// Дан массив целых чисел nums, отсортированный в неубывающем порядке.
// Вернуть массив квадратов каждого числа, отсортированный в неубывающем порядке.

// [-4, -1] => [1,16]
// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]

const sortedSquares = (nums) => {
    let indexStart = 0;
    let indexEnd = nums.length - 1;
    let index = indexEnd;
    const res = new Array(index);

    while (indexStart <= indexEnd) {
        const valueStart = nums[indexStart] * nums[indexStart];
        const valueEnd = nums[indexEnd] * nums[indexEnd];

        if (valueStart > valueEnd) {
            res[index] = valueStart;
            indexStart++;
        } else {
            res[index] = valueEnd
            indexEnd--;
        }
        index--;
    }
    return res;
}


// второй вариант
const sortedSquares1 = function (nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] ** 2;
            left++;
        } else {
            res[i] = nums[right] ** 2;
            right--;
        }
    }
    return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))