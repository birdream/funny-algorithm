
// 分治-递归
const pow = (x, n) => {
    if (n === 0) {
        return 1
    }

    if (n < 0) {
        return 1 / pow(x, -n);
    }

    if (n % 2 !== 0) {
        return x * pow(x, n - 1)
    }

    return pow(x * x, n/2)
}

// 非递归
const pow_1 = (x, n) => {
    if (n < 0) {
        x = 1/x;
        n = -n;
    }

    let pow = 1
    while (n) {
        if (n & 1) {
            pow *= x
        }

        x *= x ;
        n >>= 1
    }

    return pow;
}

;(() => {
    console.log(pow(2, 3));
    console.log(pow_1(2, 3));

    console.log(pow(2, -3));
    console.log(pow_1(2, -3));

    console.log(pow(2, 13));
    console.log(pow_1(2, 13));
})()