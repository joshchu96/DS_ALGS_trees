/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    if (!this.root.left && !this.root.right) {
      return 1;
    }

    let queue = [{ node: this.root, depth: 1 }];
    while (queue.length > 0) {
      let { node, depth } = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }
      if (node.left) {
        queue.push({ node: node.left, depth: depth + 1 });
      }
      if (node.right) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const calcDepth = (node) => {
      if (!node) {
        return 0;
      }
      let lDepth = calcDepth(node.left);
      let rDepth = calcDepth(node.right);
      return Math.max(lDepth, rDepth) + 1;
    };

    return calcDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity; // Initialize maxSum to a very small number

    // Helper function to calculate maximum sum starting from a given node
    const calcSum = (node) => {
      if (!node) {
        return 0;
      }

      // Calculate maximum sums for left and right subtrees
      let lSum = Math.max(0, calcSum(node.left)); // max(0, ...) handles negative values
      let rSum = Math.max(0, calcSum(node.right)); // max(0, ...) handles negative values

      // Calculate the maximum path sum ending at the current node
      let currentMax = node.val + lSum + rSum;

      // Update maxSum if the current path sum is greater
      maxSum = Math.max(maxSum, currentMax);

      // Return the maximum sum possible from this node downwards (including this node)
      return node.val + Math.max(lSum, rSum);
    };

    // Start the calculation from the root of the tree
    calcSum(this.root);

    return maxSum; // Return the maximum sum found
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) {
      return 0;
    }
    let nextLargerValue = null;
    let stack = [];
    let current = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      if (current.val <= lowerBound) {
        current = current.right;
      } else {
        if (nextLargerValue === null || current.val < nextLargerValue) {
          nextLargerValue = current.val;
        }
        current = null;
      }
    }
    return nextLargerValue;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}
module.exports = { BinaryTree, BinaryTreeNode };
