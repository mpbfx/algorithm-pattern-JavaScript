var reverseKGroup = (head, k) => {
    let cur = head;
    let count = 0;
    while (count !== k && cur !== null) {
        cur = cur.next;
        count++;
    }
    if (count === k) {
        let pre = null;
        let node = head;
        for (let i = 0; i < k; i++) {
            let next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        head.next = reverseKGroup(cur, k);
        return pre;
    }
    return head;
}