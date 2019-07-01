class Node {
    constructor(prev, val, next) {
        this.prev = prev;
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

            this.head.prev = newNode;
            this.head = newNode;

            this.head.prev = null;
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
            newNode.prev = this.tail;
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

        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
    }

    deleteHead() {
        if (this.length === 0) { return }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            return
        }

        this.head.prev = null;
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

        if (!node.prev) {
            this.deleteHead();
            return node;
        }

        node.next.prev = node.prev;
        node.prev.next = node.next;

        this.length--;

        return node
    }
}