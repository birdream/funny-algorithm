const Single = require('./single');
const { it } = require('../helper');

it('Single List', () => {
    const single = new Single();
    single.insert('Norman', 'head');
    single.insert('Jack', 'Norman');
    single.insert('May', 'Jack');
    single.insert('CC', 'May');

    single.push('GG');
    single.push('HH');
    single.insert('NN', 'GG');

    single.display();
});

