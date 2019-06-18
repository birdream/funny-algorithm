// Recursion

const lowestCommonAncestor = (root, p, q) => {
    if (!root || root.value === p.value || root.value === q.value) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    return !left ? right : !right ? left : root;
}

// for BST
const lowestCommonAncestor_BST = (root, p, q) => {
    if (root.value > q.value && root.val > p.value) {
        return lowestCommonAncestor_BST(root.left, p, q);
    }

    if (root.value < q.value && root.val < q.value) {
        return lowestCommonAncestor_BST(root.right, p, q);
    }

    // 开始分叉的时候这个就是common ancestor
    return root
}

const lowestCommonAncestor_BST_1 = (root, p, q) => {

    while(root) {
        if (root.value > q.value && root.val > p.value) {
            root = root.left;
            continue;
        }

        if (root.value < q.value && root.val < q.value) {
            root = root.right;
            continue;
        }

        return root
    }
}