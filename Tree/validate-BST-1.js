const BinarySearchTree = require('binarysearchtree-js');

// 中序排序 生成 生序 array
// left -> root -> right;
// O(n)

function isValidBST(root) {
    const inOrdered = inOrder(root)

    return inOrdered.eql(inOrdered.sort((x,y) => x - y))
}

const inOrder = (root) => {
    const res = [];

    _inOrder(root, res);

    return res;
}

const _inOrder = (root, res) => {
    if (!root) {
        return
    }

    _inOrder(root.left, res);
    _inOrder(root.right, res);
    typeof root.value === 'number' && res.push(root.value);
}

;(() => {
    const bst = new BinarySearchTree();
    bst.push(10,12,3,4,5,6,1,2,0,9);
    // console.dir(bst.root, {depth: 999})
    console.log(inOrder(bst.root))
    // console.log(inOrderRes);
})()

