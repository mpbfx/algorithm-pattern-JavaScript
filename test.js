var reverse = (head) => {
    let pre = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

var reverse2 = (head, left, right) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;

    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy.next;
}

var kGroup = (head, k) => {
    let cur = head;
    let count = 0;
    while (cur !== null && count !== k) {
        count++;
        cur = cur.next;
    }

    if (k === count) {
        let pre = null;
        let node = cur;
        while (node !== null) {
            let next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        head.next = kGroup(cur, k);
        return pre;
    }
    return head;
}

var reverse22 = (head, left, right) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = head;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy.next;
}

var kGroup2 = (head, k) => {
    let cur = head;
    let count = 0;
    while (cur !== null && count !== k) {
        cur = cur.next;
        count++;
    }
    if (k === count) {
        let pre = null;
        let node = head;
        for (let i = 0; i < k; i++) {
            let next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        head.next = kGroup2(cur, k);
        return pre;
    }
    return head;
}

var mergeTwoList = (l1, l2) => {
    let p1 = l1;
    let p2 = l2;
    let dummy = new ListNode(-1);
    let p = dummy;
    while (l1 && l2) {
        if (p1.val <= p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    p.next = l1 === null ? l2 : l1;
    return dummy.next;
}

var reverse222 = (head, left, right) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = head;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let cur = pre.next;
    for (let i = 0; i < right - left; i++) {
        let next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy.next;
}

var kGroup3 = (head, k) => {
    let cur = head;
    let count = 0;

    while (cur !== null && count !== k) {
        cur = cur.next;
        count++;
    }

    if (k === count) {
        let pre = null;
        let node = head;
        for (let i = 0; i < k; i++) {
            let next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        head.next = kGroup3(cur, k);
        return pre;
    }
    return head;
}