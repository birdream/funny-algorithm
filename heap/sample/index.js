const BigHeap = require('../bigHeap');
const SmallHeap = require('../smallHeap');
const { getRandomArr, it } = require('../../helper');

;(() => {
    it('should some BigHeap result', () => {
        const bigHeap = new BigHeap(getRandomArr(20, 100));
        bigHeap.print();
        bigHeap.add(50).print();
        bigHeap.add(98).print();
        bigHeap.add(100).print();
        bigHeap.add(101).print();
        bigHeap.add(150).print();
        bigHeap.add(101).print();
        bigHeap.sort().print();
    });

    it('should some SamllHeap result', () => {
        const samllHeap = new SmallHeap(getRandomArr(20, 100));
        samllHeap.print();
        samllHeap.add(1).print();
        samllHeap.add(2).print();
        samllHeap.add(10).print();
        samllHeap.add(0.2).print();
        samllHeap.add(0).print();
        samllHeap.add(-1).print();
        samllHeap.sort().print();
    });

    it('get middle number example', () => {

    })
})()