// https://leetcode.com/problems/middle-of-the-linked-list/

const hasCycle = (head) => {
    let slow = head;
    let fast = head
    while (fast && fast.next) {
        slow = slow?.next;
        fast = fast.next?.next;
        if (slow === fast) return true
    }
    return slow
}
