// 广度优先算法 BFS
const solution_BFS = (root) => {
    if (!root) { return [] }

    const result = [];
    const queue = [];
    queue.push(root);

    // const visited = set(root)

    while (queue.length) {
        const level_size = queue.length;
        const current_level = [];

        for (let i = 0; i < level_size; i++) {
            const node = queue.shift();
            current_level.push(node.value);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        result.push(current_level);
    }

    return result;
}

// 深度优先 DFS
const solution_DFS = (root) => {
    if (!root) {return []}
    const result = [];

    const _dfs = (root, level) => {
        if (!root) { return }

        if (result.length < level + 1) {
            result.push([]);
        }

        result[level].push(root.value);

        _dfs(root.left, level + 1);
        _dfs(root.right, level + 1);
    }

    _dfs(root, 0);

    return result;
}

;(() => {
    const BinarySearchTree = require('binarysearchtree-js');
    const bst1 = new BinarySearchTree();
    bst1.push(10,12,3,4,5,6,1,2,0,9);
    console.log(solution_BFS(bst1.root));
    console.log(solution_DFS(bst1.root));

    console.log();

    const bst2 = new BinarySearchTree();
    bst2.push(38,45,24,58,42,30,12,67,51);
    console.log(solution_BFS(bst2.root));
    console.log(solution_DFS(bst2.root));
})()