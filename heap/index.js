const { getRandomArr } = require('../helper');

class Heap {
    constructor(input = []) {
        // console.log('input: ', JSON.stringify(input))
        this.heap = input;
        console.time('build heap');
        this._buildHeap();
        console.timeEnd('build heap');
    }

    // parent(i) = floor((i - 1)/2)
    // left(i)   = 2i + 1
    // right(i)  = 2i + 2
    _buildHeap() {
        const len = this.heap.length;
        for (let i = 0; i < len; i++) {
            const parentIdx = this._getParentIdx(i)
            if (parentIdx < 0) { continue; }
            this._switchPar({ parentIdx, newIdx: i - 1 })
        }
        return this.heap
    }

    _getParentIdx(i) {
        const j = Math.floor((i - 1)/2)

        return j >= 0 ? j : -1
    }

    _switchPar({ parentIdx, newIdx }) {
        const a = this.heap;

        if (parentIdx < 0 || a[newIdx] <= a[parentIdx]) { return }

        [a[parentIdx], a[newIdx]] = [a[newIdx], a[parentIdx]]

        this._switchPar({
            parentIdx: this._getParentIdx(parentIdx),
            newIdx: parentIdx
        })
    }

    _getLeftIdx(i) {
        const j = 2 * i + 1

        return j <= this.heap.length - 1 ? j : null
    }

    _getRightIdx(i) {
        const j = 2 * i + 2

        return j <= this.heap.length - 1 ? j : null
    }

    push(val) {
        const newIdx = this.heap.push(val) - 1;

        this._switchPar({
            parentIdx: this._getParentIdx(newIdx),
            newIdx
        });

        return this;
    }

    remove(idx) {
        const a = this.heap;
        const lastIdx = a.length - 1;
        if (idx > lastIdx) { return; }

        if (lastIdx === idx) {
            a.splice(idx, 1);
            return;
        }

        delete a[idx];

        const leftChildIdx = this._getLeftIdx(idx);
        const rightChildIdx = this._getRightIdx(idx);
        if (!leftChildIdx || !rightChildIdx) { return; }

        [a[idx], a[lastIdx]] = [a[lastIdx], a[idx]];
        a.pop();
        // for (let i = 0; i < len; i++) {
        //     const parentIdx = this._getParentIdx(i)
        //     if (parentIdx < 0) { continue; }
        //     this._switchPar({ parentIdx, newIdx: i - 1 })
        // }


    }

    sort() {
        return this;
    }

    print() {
        console.log('result: ', JSON.stringify(this.heap));
    }
}

;(() => {
    const input = getRandomArr(10, 100);
    // console.time('sort')
    // input.sort();
    // console.timeEnd('sort')
    const heap = new Heap(input);
    heap.print();
})()