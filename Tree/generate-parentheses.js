
// 思路： 往2n个格子里面填充左右括号
// 但有一些情况可以剪掉：
// 1\ 左右括号最大值只能是n
// 2\ 右括号肯定比左括号少
// 3\ 当左右括号数量都为n的时候返回结果
const generateParenthesis = (n) => {
    const list = [];

    const _gen = (left, right, n, result) => {
        if (left === n && right === n) return list.push(result);

        if (left < n) _gen(left + 1, right, n, result + '(');

        if (left > right && right < n) _gen(left, right + 1, n, result +')');
    }

    _gen(0,0,n,'')

    return list;
}



;(() => {
    console.log(generateParenthesis(3));
    console.log(generateParenthesis(4));
    console.log(generateParenthesis(5));
})()