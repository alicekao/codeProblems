module.exports = function(array, target) {
  var foundI = -1;
  
  var recurse = function(seg, startI) {
    if (seg.length === 1) {
      foundI = seg[0] === target ? startI : -1;
      return;
    }
    
    var midI = Math.floor(seg.length / 2);
    if (seg[midI] === target) {
      foundI = startI+midI;
      return;
    } else if (seg[midI] > target) {
      recurse(seg.slice(0,midI), startI);
    } else if (seg[midI] < target) {
      recurse(seg.slice(midI+1), startI+midI+1);
    }
  };
  
  recurse(array, 0);
  return foundI;
};