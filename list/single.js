class Node {
    constructor(ele) {
        this.ele = ele;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = new Node('head');
        this.length = 1;
    }

    insert(newEle, item) {
        const newNode = new Node(newEle);
        const currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    unshift(newEle) {
        const newNode = new Node(newEle);
        newNode.next = this.head;
        this.head = newNode;
    }

    push(newEle) {
        const newNode = new Node(newEle);
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
        }

        currNode.next = newNode;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.ele !== item) {
            currNode = currNode.next;
        }

        return currNode;
    }

    display() {
        let currNode = this.head;
        console.log(`${currNode.ele}, `)
        while (currNode.next) {
            currNode = currNode.next;
            console.log(`${currNode.ele}, `)
        }
    }

    findPrev(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.ele !== item) {
            currNode = currNode.next
        }

        return currNode || null;
    }

    remove(item) {
        const preNode = this.findPrev(item)
        if (preNode.next !== null) {
            preNode.next = preNode.next.next
        }
    }
}

module.exports = List;