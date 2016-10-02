const subset = (t1, t2) => {
  if (!t1 && !t2) return true;
  if (t1 && t2) {
    if (t1.val === t2.val) {
      var newLeft = subset(t1.left, t2.left);
      var newRight = subset(t1.right, t2.right);
      if (newLeft && newRight) return true;
      return false;
    } else {
      var left = subset(t1.left, t2);
      var right = subset(t1.right, t2);
      if (!left && !right) return false;
      return true;
    }
  }
}

module.exports = subset;