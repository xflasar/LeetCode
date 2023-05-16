// Author: Martin Flasar
// Date: 5/17/2023
// LeetCode: 24. Swap Nodes in Pairs
// URL: https://leetcode.com/problems/swap-nodes-in-pairs/
//

var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head
    }

    let temp = head.next
    head.next = swapPairs(head.next.next)
    temp.next = head
    
    return temp
}

// Runtime: 57 ms, Memory Usage: 42.2 MB