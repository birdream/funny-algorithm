class Node {
    constructor(pre, val, next) {
        this.pre = pre;
        this.val = val;
        this.next = next;
    }
}

class DoubleLink {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addHead(val) {
        const newNode = new Node(null, val, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;

            this.head.pre = newNode;
            this.head = newNode;

            this.head.pre = null;
        }

        this.length++

        return newNode;
    }

    addTail(val) {
        const newNode = new Node(null, val, null);

        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.pre = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

            this.tail.next = null;
        }

        this.length++

        return newNode
    }

    deleteTail() {
        if (this.length === 0) {
            return
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;

            return
        }

        this.tail.pre.next = null;
        this.tail = this.tail.pre;
        this.length--;
    }

    deleteHead() {
        if (this.length === 0) { return }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return
        }

        this.head.pre = null;
        this.head = this.head.next;
        this.length--;
    }

    find(val) {
        let currentNode = this.head;

        while(currentNode && currentNode.val !== val) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    remove(val) {
        if (!val) {
            this.deleteTail();
        }

        const node = this.find(val);

        if (!node) { return null };

        if (!node.next) {
            this.deleteTail();
            return node;
        }

        if (!node.pre) {
            this.deleteHead();
            return node;
        }

        node.next.pre = node.pre;
        node.pre.next = node.next;

        this.length--;

        return node
    }
}