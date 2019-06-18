

const BinarySearchTree = require('binarysearchtree-js');

const isValidBST = (root) => {
    let prev = null;

    return helper(root, prev);
}

const helper = (root, prev) => {
    if (!root) return true;
    if (!helper(root.left)) return false;
    if (prev && prev.value >= root.value) return false;

    prev = root;

    return helper(root.right);
}

;(() => {
    const bst = new BinarySearchTree;
    bst.push(1,3,4,55,32,014,99,12,2);
    console.log(isValidBST(bst.root))
})()