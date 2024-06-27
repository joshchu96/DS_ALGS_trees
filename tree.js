/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }

    let treeStack = [this.root];
    let total = 0;

    while (treeStack.length) {
      let current = treeStack.pop();

      total += current.val;

      for (let child of current.children) {
        if (child !== null) {
          treeStack.push(child);
        }
      }
    }

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let treeList = [this.root];
    let totalEvens = 0;

    while (treeList.length) {
      let currentNode = treeList.pop();

      if (currentNode.val % 2 === 0) {
        totalEvens++;
      }

      for (let child of currentNode.children) {
        treeList.push(child);
      }
    }
    return totalEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let searchTree = [this.node];
    let count = 0;
    while (searchTree.length) {
      let currentNode = searchTree.pop();
      if (currentNode.val > lowerBound) {
        count += 1;
      }
      for (let child of currentNode.children) {
        searchTree.push(child);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
