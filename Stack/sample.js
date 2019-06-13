
const left_arr = ['(','[','{'];
const right_map = {
    ')': '(',
    ']': '[',
    '}': '{'
}

// Time: O(n)
// Space: O(n)
const judge = (input) => {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        if (left_arr.includes(item)) {
            stack.push(item);
        }

        if (right_map[item]) {
            if (stack[stack.length - 1] !== right_map[item]) {
                return false
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

;(() => {
    console.log(judge('()[]{}'));
    console.log(judge('([)[]{}'));
    console.log(judge('()[{]}'));
    console.log(judge('((({([])})))'));
    console.log(judge('(aaa){}[]'));
})()