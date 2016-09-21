var Tree = function (val) {
  this.val = val;
  this.children = [];
}
Tree.prototype.addChild = function (newTree) {
  var newTree = new Tree(newTree);
  this.children.push(newTree);
  return newTree;
};

//Assuming only called on root node
Tree.prototype.DFSelect = function (filter) {
  const results = [];
  var recurse = function (node, depth) {
    if (filter(node.val, depth)) { results.push(node.val); }
    node.children.forEach(function (child) {
      recurse(child, depth + 1);
    });
  }
  recurse(this, 0);
  return results;
};

module.exports = Tree; 