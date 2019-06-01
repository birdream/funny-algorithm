const { getRandomArr, swap } = require('../helper');

class Heap {
    constructor(input = []) {
        // console.log('input: ', JSON.stringify(input))
        this.heap = input;
        console.time('build heap');
        this._buildHeap();
        console.timeEnd('build heap');
    }

    // compare the (non-leap node)'s left and right and itself
    // switch the index between the biggest one and the small one and stop
    _heapify(i, len = this.heap.length) {
        const a = this.heap;

        while(true) {
            let maxPos = i;
            if (2*i+1 <= len && a[i] < a[2*i+1]) maxPos = 2*i+1
            if (2*i+2 <= len && a[maxPos] < a[2*i+2]) maxPos = 2*i+2
            if (i === maxPos) break

            swap(a, i, maxPos);
            i = maxPos;
        }
    }

    // get the last first (non-leap node) parent the _heapify
    // and loop the second (non-leap node) untill the top father node
    _buildHeap() {
        // let i = this._getParentIdx(this.heap.length - 1);
        for (let i = this._getParentIdx(this.heap.length - 1); i >= 0; i--) {
            this._heapify(i)
        }

        return this.heap
    }

    _getParentIdx(i) {
        return Math.floor((i - 1)/2)
    }

    // add one and using it to it father to heap
    add(val) {
        const a = this.heap;
        let newIdx = a.push(val) - 1;

        while(this._getParentIdx(newIdx) >= 0 && a[newIdx] > a[this._getParentIdx(newIdx)]) {
            swap(a, newIdx, this._getParentIdx(newIdx));
            newIdx = this._getParentIdx(newIdx);
        }

        return this;
    }

    remove0() {
        const a = this.heap;
        const lastIdx = a.length - 1;
        [a[0], a[lastIdx]] = [a[lastIdx], a[0]];
        a.pop();

        this._heapify(0);

        return this;
    }

    // every time switch the first element to the last one and re-heap for the whole arr except the last one.
    // so k is the last index of the whole arr and -1 every time
    // because the last one is the originall max one
    sort() {
        let k = this.heap.length - 1;
        console.time('sort')
        while(k > 0) {
            swap(this.heap, k, 0);
            // k -= 1;
            this._heapify(0, --k);
        }
        console.timeEnd('sort');

        return this;
    }

    // TODO: add the verify method to make sure every leap node is less than father in the heap;
    verify() {

    }

    print() {
        console.log('result: ', JSON.stringify(this.heap));
    }
}

module.exports = Heap;