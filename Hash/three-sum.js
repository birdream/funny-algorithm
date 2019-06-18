// tree sum equal 0;
function threeSum(target) {
    const k = 0;
    const res = [];
    if (target.length < 3) { return res }


    // quit sort O(NlogN)
    target = target.sort((x,y) => x - y);

    for (let i = 0; i < target.length; i++) {
        if (i > 0 && target[i] === target[i-1]) continue;

        let l = i + 1;
        let r = target.length - 1;
        while (l < r) {
            const sum = target[i] + target[l] + target[r];
            if (sum < k) l++;
            if (sum > k) r--;
            if (sum === k) {
                res.push([target[i], target[l], target[r]]);
                while (l < r && target[l] === target[l+1]) {
                    l++;
                }

                while (l < r && target[r] === target[r-1]) {
                    r--;
                }

                l++;
                r--;
            }
        }
    }

    return res;
}


;(() => {
    console.log(threeSum([-1,0,1,2,4,5,5,7,-8,-7]));
    console.log(threeSum([0,0,0]));
    console.log(threeSum([0,0,0,0,0,0]));
    console.log(threeSum([0,0,0,0,0,1,-1]));
    console.log(threeSum([-9, 9, 1]));
})();