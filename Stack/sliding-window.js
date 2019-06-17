// get the max values from a sliding window of size K
const maxSlidingWindow = (target, k) => {
    let window = [], results = [];
    for (let i = 0; i < target.length; i++) {
        while(window.length !== 0 && window[0] < i - k + 1) {
            window.shift();
        }

        while(window.length !== 0 && target[window[window.length - 1]] < target[i]){
            window.pop();
        }

        window.push(i);
        if(i >= k - 1){
            results.push(target[window[0]]);
        }
    }

    return results;
}

;(() => {
    console.log(maxSlidingWindow([1,2,3,4,5,6,7,8,9], 3));
    console.log(maxSlidingWindow([3,4,5,2,6,8,2,9,2,3,1,0,23,3456,34685678,435], 3));
    console.log(maxSlidingWindow([11,22,473,46,58,67,67,28,49], 3));
    console.log(maxSlidingWindow([1,2,3,4,5,6,7,8,9], 3));
})()