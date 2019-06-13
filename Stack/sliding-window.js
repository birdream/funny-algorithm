// get the max values from a sliding window of size K
const maxSlidingWindow = (target, k) => {
    let window = [], index = -1, results = [];
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