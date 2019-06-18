// recursion: validate(```, min, max) {
//     max = validate(node.left);
//     min = validate(node.right);
//     max < root, min > root
// }
// O(n)
const BinarySearchTree = require('binarysearchtree-js');

const isValid = (root, min, max) => {
    if (!root) return true;
    if (typeof min === 'number' && root.value <= min) return false;
    if (typeof max === 'number' && root.value >= max) return false;

    return isValid(root.left, min, root.value) &&
        isValid(root.right, root.value, max);
}

;(() => {
    const bst = new BinarySearchTree;
    bst.push(1,3,4,55,32,14,99,102,2);
    console.log(isValid(bst.root));
})()