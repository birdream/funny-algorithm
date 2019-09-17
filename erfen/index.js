const sqrt = (x, jing) => {
    if (x === 0 || x === 1) return x;

    let l = 0, r = x, res;

    while(l <= r) {
        const m = (l + r) / 2;

        let j = m - x;
        if (j < 0) {
            j = x - m;
        }

        if (j <= jing) { return m; }

        if (m > x / m) {
            r = m - jing
        } else {
            l = m + jing;
            res = m;
        }
    }

    return res
}


const sqrt1 = (x, jing) => {
    let r = x;

    do {
        r = (r + x / r) / 2;
    }
    while(Math.abs(r * r - x) >= jing);

    return r
}

;(() => {

    const test = (num, p) => {
        console.log(`--------------${num}-----------`)
        console.time('own')
        console.log(sqrt(num, p));
        console.timeEnd('own')

        console.log();
        console.time('own1')
        console.log(sqrt1(num, p));
        console.timeEnd('own1')

        console.log();
        console.time('origin')
        console.log(Math.sqrt(num));
        console.timeEnd('origin')
        console.log();
    }

    test(15000, 0.00000001);
    test(2000, 0.00000001);
    test(20000000, 0.00000001);
    test(37, 0.00000001);
    test(4, 0.00000001);
    test(1008899, 0.00000001);
    // console.log(Number.EPSILON)

    // console.log(sqrt(2));
})()