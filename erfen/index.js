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
    console.time('own')
    console.log(sqrt(2000, 0.00000001));
    console.timeEnd('own')

    console.log();
    console.time('own1')
    console.log(sqrt1(2000, 0.00000001));
    console.timeEnd('own1')

    console.log();
    console.time('origin')
    console.log(Math.sqrt(2000));
    console.timeEnd('origin')
    // console.log(Number.EPSILON)

    // console.log(sqrt(2));
})()