const opts = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

module.exports = function (boardStr) {
  var rows = boardStr.split('\n');
  var cols = [];
  var boxes = [];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (!loopThroughOpts(row)) { return 'invalid'; }
    for (var j = 0; j < row.length; j++) {
      cols[j] = cols[j] ? cols[j] + row[j] : [row[j]];
      var boxI = 3*Math.floor(i/3) + Math.floor(j/3);
      boxes[boxI] = boxes[boxI] ? boxes[boxI] + row[j] : [row[j]];
    }
  }
  for (var k = 0; k < cols.length; k++) {
    if (!loopThroughOpts(cols[k])) { return 'invalid'; }
  }
  for (var l = 0; l < boxes.length; l++) {
    if (!loopThroughOpts(boxes[l])) { return 'invalid'; }
  }
  return 'solved';
}

function loopThroughOpts(arr) {
  return opts.every(opt => {
    if (arr.indexOf(opt) === -1) {
      return false;
    }
    return true;
  });
}