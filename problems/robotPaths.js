module.exports = function(n) {
  var board = makeBoard(n);
  var count = 0;
  var recurse = function(i, j) {
    if (i=== n-1 && j=== n-1) {
      return count++;
    }
    board.togglePiece(i, j);
    j<n-1 && !board.hasBeenVisited(i, j+1) ? recurse(i, j+1) : null;
    i<n-1 && !board.hasBeenVisited(i+1, j) ? recurse (i+1, j) : null;
    i>0 && !board.hasBeenVisited(i-1, j) ? recurse(i-1, j) : null;
    j>0 && !board.hasBeenVisited(i, j-1) ? recurse(i, j-1) : null;
    board.togglePiece(i, j);
  };
  n===0 ? null : recurse(0,0)
  return count;
};

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}