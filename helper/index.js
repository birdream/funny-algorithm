const inter = {}


module.exports = inter

inter.getRandomArr = (len = 10, max = 100) => {
    const arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(Math.ceil(Math.random() * max))
    }

    return arr;
}