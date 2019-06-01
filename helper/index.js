const inter = {}


module.exports = inter

inter.getRandomArr = (len = 10, max = 100) => {
    const arr = [];

    for (let i = 0; i < len; i++) {
        arr.push(Math.ceil(Math.random() * max))
    }

    return arr;
}

inter.swap = (arr, x, y) => {
    [arr[x], arr[y]] = [arr[y], arr[x]]
}

inter.it = (title, fn) => {
    console.log('/////////////')
    console.dir(title, { colors: true });
    console.log('/////////////');
    console.log(' ');
    fn();
    console.log(' ');
    console.log(' ');
}