module.exports = (tree, target) => {
  let count = 0;
  const recurse = (node, sumArr) => {
    if (!node) return;
    var summed = sumArr.map(num => {
      var sum = num+node.val;
      if (sum === target) count++;
      return sum;
    });
    if (node.val === target) count++;
    summed.push(node.val);
    recurse(node.left, summed);
    recurse(node.right, summed);
  }
  recurse(tree, []);
  return count;
}

/*
Input: tree (binary), target (number)
Output: number

Edge cases: 
 - No matches => 0
 - Does single node count? yes

*/