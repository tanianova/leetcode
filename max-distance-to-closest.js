// https://leetcode.com/problems/maximize-distance-to-closest-person/
// на вход нам дается массив из 0 и 1 (1 — занятое место в ряду, 0 — свободное). Необходимо найти, на каком максимально
// возможном расстоянии до ближайшего сидящего человека есть возможность приобрести билет.

const input1 = [1, 0, 0, 0, 1, 0, 1]; // 2
const input2 = [1, 0, 0, 0]; // 3

//сложность по времени O(n) по памяти O(1)
const maxDistToClosest = function (seats) {
    let max = 0;
    let count = 0;
    let i = 0;

    if (seats[i] === 0) {
        while (seats[i] === 0) {
            i++;
            count += 1;
        }

        max = count;
        count = 0;
    }


    for (; i < seats.length; i++) {
        let current = seats[i];

        if (i === seats.length - 1 && current === 0) {
            count += 1;
            max = Math.max(max, count);
            break;
        }

        if (current === 1) {
            count = 0;
        } else {
            count += 1;
            max = Math.max(max, Math.ceil(count / 2))
        }
    }


    return max;
};

console.log(maxDistToClosest(input1));
console.log(maxDistToClosest(input2));