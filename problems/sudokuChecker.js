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
      if (i < 3 && j < 3) { boxes[0] = boxes[0] ? boxes[0] + row[j] : [row[j]] }
      else if (i < 3 && j < 6) { boxes[1] = boxes[1] ? boxes[1] + row[j] : [row[j]] }
      else if (i < 3 && j < 9) { boxes[2] = boxes[2] ? boxes[2] + row[j] : [row[j]] }
      else if (i < 6 && j < 3) { boxes[3] = boxes[3] ? boxes[3] + row[j] : [row[j]] }
      else if (i < 6 && j < 6) { boxes[4] = boxes[4] ? boxes[4] + row[j] : [row[j]] }
      else if (i < 6 && j < 9) { boxes[5] = boxes[5] ? boxes[5] + row[j] : [row[j]] }
      else if (i < 9 && j < 3) { boxes[6] = boxes[6] ? boxes[6] + row[j] : [row[j]] }
      else if (i < 9 && j < 6) { boxes[7] = boxes[7] ? boxes[7] + row[j] : [row[j]] }
      else if (i < 9 && j < 9) { boxes[8] = boxes[8] ? boxes[8] + row[j] : [row[j]] }
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