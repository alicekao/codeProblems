function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST(arr) {
  if (arr.length === 1) { return new Tree(arr[0]); }
  if (!arr.length) { return null; }
  var midI = Math.floor(arr.length / 2);
  var root = new Tree(arr[midI]);
  root.left = BST(arr.slice(0, midI));
  root.right = BST(arr.slice(midI + 1));
  return root;
}

module.exports = {BST: BST, tree: Tree};