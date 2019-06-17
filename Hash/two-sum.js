
function getTwoSum (arr, target) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof map[target - arr[i]] === 'number') {
            return [i, map[target - arr[i]]]
        }
    }

    return []
}

;(() => {
    console.log(getTwoSum([1,2,3,4,5], 6))
    console.log(getTwoSum([0,2,3,4,0], 3));
    console.log(getTwoSum([0,2,3,4,0], 0));
    console.log(getTwoSum([0,2,3,4,0], 7));
    console.log(getTwoSum([0,2,3,4,0], 9));
})()