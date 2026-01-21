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

var mergeTwo = (l1, l2) => {
    let dummy = new ListNode(-1);
    let pre = dummy;
    while(l1 && l2){
        if(l1.val <= l2.val){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 === null ? l2 : l1;
    return dummy.next;
}

var reversek = (head, k) => {
    let count = 0;
    let cur = head;
    while(cur !== null && k !== count){
        cur = cur.next;
        count++;
    }
    if(count === k){
        let pre = null;
        let node = head;
        for(let i = 0; i < k; i++){
            let next = node.next;
            node.next = next.next;
            next.next = pre.next;
            pre.next = next;
        }
        head.next = reversek(cur, k);     
        return pre;   
    }
    return head;
}

var mergeKList = (lists) => {
    if(lists.length === 0) return null;
    return solve(lists, 0, lists.length);
}

function solve(lists, left, right){
    if(left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l1 = solve(lists, left, mid);
    let l2 = solve(lists, mid + 1, right);
    return mergeTwoList1(l1, l2);
}

function mergeTwoList1(l1, l2){
    let dummy = new ListNode(-1);
    let pre = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 === null ? l2 : l1;
    return dummy.next;
}

var reverse2222 = (head, left, right) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    for(let i = 1; i < left; i++){
        pre = pre.next;
    }
    let cur = pre.next;
    for(let i = 0; i < right - left; i++){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return dummy.next;
}

var mergeKList1 = (lists) => {
    return sortList(lists, 0, lists.length - 1);
}

function sortList(lists, left, right){
    if(left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l = sortList(lists, 0, mid);
    let r = sortList(lists, mid + 1, right);
    return mergeTwoList2(l, r);
}

function mergeTwoList2(l1, l2){
    let dummy = new ListNode(-1);
    let pre = dummy;
    while(l1 && l2){
        if(l1.val <= l2.val){
            pre.next = l1;
            l1 = l1.next;
        }else{
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    return dummy.next;
}

var sortList = (head) => {
    return mergeSort(head);
}

const mergeSort = head => {
    if(head === null || head.next === null){
        return head;
    }
    let slow = head;
    let fast = head.next.next;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    let left = mergeSort(head);
    let right = mergeSort(mid);
    return mergeKList(left, right)
}


const circle = head => {
    if(!head) return false;
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;
}

const sortList = head => {
    return mergeSort(head);
}

function mergeSort(head){
    if(head == null || head.next == null){
        return head;
    }
    let slow = head;
    let fast = head.next.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    let l1 = mergeSort(head);
    let l2 = mergeSort(mid);
    return mergeTwoList(l1, l2);
}

const sortList = (head) => {
    return mergeSort(head);
}

function mergeSort(head){
    if(head === null || head.next === null){
        return head;
    }
    let slow = head;
    let fast = head.next.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    let l1 = mergeSort(head);
    let l2 = mergeSort(mid);
    return mergeTwoList(l1, l2);
}

const hasCircle = head => {
    let slow = head;
    let fast = head.next;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

const removeDN = function(head, n){
    let dummy = new ListNode(-1);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

const hasCircle2 = head => {
   let slow = head;
   let fast = head;
   while(fast && fast.next){
    slow = slow.next;
    fast = fast.next;
    if(slow === fast){
        slow = head;
        while(slow !== fast){
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
   }
   return null;
}

const intersaction = (headA, headB) => {
    if(headA === null || headB === null) return null;
    let pA = headA;
    let pB = headB;

    while(pA !== pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA;

}

const deleteN = (head, n) => {
    let dummy = new ListNode(-1);
    dummy.next = head;``
    let slow = dummy;
    let fast = dummy;

    for(let i = 0; i < n; i++){
        fast = fast.next;
    }

    while(fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}

const intersaction1 = (headA, headB) => {
    if(headA === null || headB === null) return null;
    let pA = headA;
    let pB = headB;

    while(pA !== pB){
        pA = pA === null ? headB : headA;
        pB = pB === null ? headA : headB;
    }

    return pA;
}

const resort = (head) => {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let cur = slow.next;
    slow.next = null;
    let pre = null;
    while(cur !== null){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    let head1 = head;
    let head2 = pre;
    while(head1 && head2){
        let next1 = head1.next;
        let next2 = head2.next;
        head1.next = head2;
        head1 = next1;
        head2.next = next1;
        head2 = next2;
    }
}

const resortList = head => {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let pre = null;
    let cur = slow.next;
    slow.next = null;

    while(cur !== null){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    let l1 = head;
    let l2 = pre;
    while(l1 && l2){
        let next1 = l1.next;
        let next2 = l2.next;
        l1.next = l2;
        l1 = next1;
        l2.next = next1;
        l2 = next2;
    }
}

const LRUCache = function(capacity){
    this.capacity = capacity;
    this.map = new Map();
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.head.next = this.tail;
    this.tail.pre = this.head;
}

function ListNode(key, val){
    this.key = key;
    this.val = val;
    this.pre = null;
    this.next = null;
}

LRUCache.prototype.get = function(key){
    if(!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.moveToHead(node);
    return node;
}

LRUCache.prototype.put = function(key, value){
    if(this.map.has(key)){
        const node = this.map.get(key);
        node.val = value;
        this.moveToHead(node);
    }else{
        if(this.capacity === this.map.size){
            const lastNode = this.tail.prev;
            this.removeNode(lastNode);
            this.map.delete(lastNode.key);
        }
        const node = new ListNode(key, value);
        this.addNodeToHead(node);
        this.map.set(key, value);
    }
}

LRUCache.prototype.moveToHead = function(node){
    this.removeNode(node);
    this.addNodeToHead(node);
}

LRUCache.prototype.removeNode = function(node){
    node.pre.next = node.next;
    node.next.pre = node.pre;
}

LRUCache.prototype.addNodeTohead = function(node){
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
    this.next.pre = node;
}

const deleteDuplicates = (head) => {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    while(pre.next !== null && pre.next.next !== null){
        if(pre.next.val === pre.next.next.val){
            let val = pre.next.val;
            while(pre.next !== null && val === pre.next.val){
                pre.next = pre.next.next;
            }
        }else{
            pre = pre.next;
        }
    }
    return dummy.next;
}