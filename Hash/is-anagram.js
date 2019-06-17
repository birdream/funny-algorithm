function ascii (a) {
    return a.charCodeAt(0);
}

// NOTE: not work!
function isAnagram(str1, str2) {
    let sum1 = 0, sum2 = 0;
    str1.split('').forEach(v => sum1 += ascii(v));
    [...str2].forEach(v => sum2 += ascii(v));

    return sum1 === sum2
}

;(() => {
    console.log(isAnagram('askjdfgljh', 'hskjdfglja'));
    console.log(isAnagram('sdfg', '||fsa'));
    console.log(isAnagram('$)', 'M')); // true, should be false here.
})()