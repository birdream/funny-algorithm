const maxDepth = (root) => {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

const minDepth = (root) => {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);

    // divide and conquer
    const leftMinDepth = minDepth(root.left);
    const rightMinDepth = minDepth(root.right);

    // process sub-problems' results
    return 1 + Math.min(leftMinDepth, rightMinDepth);
}

const minDepth_2 = (root) => {
    if (!root) return 0;

    const leftMinDepth = minDepth_2(root.left);
    const rightMinDepth = minDepth_2(root.right);

    return (leftMinDepth === 0 || rightMinDepth === 0) ?
        leftMinDepth + rightMinDepth + 1 :
        Math.min(leftMinDepth, rightMinDepth) + 1;
}

;(() => {
    const BinarySearchTree = require('binarysearchtree-js');
    const bst1 = new BinarySearchTree();
    bst1.push(10,12,3,4,5,6,1,2,0,9);
    console.log(maxDepth(bst1.root));
    console.log(minDepth(bst1.root));
    console.log(minDepth_2(bst1.root));

    console.log();

    const bst2 = new BinarySearchTree();
    bst2.push(38,45,24,58,42,30,12,67,51);
    console.log(maxDepth(bst2.root));
    console.log(minDepth(bst2.root));
    console.log(minDepth_2(bst2.root));
})()