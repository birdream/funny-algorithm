const { getRandomArr } = require('../helper');

;(() => {
    const input = getRandomArr(100000, 100000)
    console.log('input: ', JSON.stringify(input));
})()