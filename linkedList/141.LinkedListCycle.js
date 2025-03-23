// https://leetcode.com/problems/linked-list-cycle/
// Дан указатель на голову head связного списка, определите, есть ли в связном списке цикл.
// В связном списке есть цикл, если какой-то узел в списке можно достигнуть снова, продолжая следовать по указателю next.
// Внутренне переменная pos используется для обозначения индекса узла, к которому подключен указатель next хвоста.
// pos не передается в качестве параметра.
// Верните true, если в связном списке есть цикл, иначе верните false.

const hasCycle = (head) => {
    let slow = head;
    let fast = head?.next
    while (fast && fast.next) {
        slow = slow?.next;
        fast = fast.next.next;
        if (slow === fast) return true
    }
    return false
}

