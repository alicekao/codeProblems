var Tree = function() {
  this.children = [];
}

Tree.prototype.addChild = function(newTree) {
  this.children.push(newTree);
}

Tree.prototype.getPath = function(target) {
  var results = [];
  var found = false;
  (function recurse(node) {
    results.push(node)
    if (node === target) {
      found = true;
      return;
    }
    for (var i = 0; !found && i < node.children.length; i++) {
      recurse(node.children[i]);
    }
    if (!found) {
      results.pop();
    }
  })(this);
  return found ? results : null;
}

Tree.prototype.commonAncestor = function(a, b) {
  if (a===b) return a;
  var aPath = this.getPath(a);
  var bPath = this.getPath(b);
  if (!aPath || !bPath) return null; 
  for (var i = 0; i < Math.min(aPath.length, bPath.length); i++) {
    if (aPath[i+1] !== bPath[i+1]) {
      return aPath[i];
    }
  }
  return null;
}

module.exports = Tree;