module.exports = (tree) => {
  return maxDepth(tree) - minDepth(tree) <= 1;
}

function minDepth(tree) {
  if (!tree) return 0;
  return 1+Math.min(minDepth(tree.left), minDepth(tree.right));
}

function maxDepth(tree) {
  if (!tree) return 0;
  return 1+Math.max(maxDepth(tree.left), maxDepth(tree.right));
}