var recOverlap = function(coords) {
  var ax = {};
  var ay = {};
  var bx = {};
  var by = {};
  for (var i = 0; i < coords.length; i++) {
    if (i<4) {
      ax[coords[i][0]] = true;
      ay[coords[i][1]] = true;
    } else {
      bx[coords[i][0]] = true;
      by[coords[i][1]] = true;
    }
  }
  ax = parse(Object.keys(ax));
  bx = parse(Object.keys(bx));
  ay = parse(Object.keys(ay));
  by = parse(Object.keys(by));
  if (ax.length < 2 || bx.length < 2 || ay.length < 2 || by.length < 2 || ax[0] >= bx[1] || bx[0] >= ax[1] || ay[0] >= by[1] || by[0] >= ay[1]) return 0;
  var width = Math.abs(Math.min(bx[1],ax[1]) - Math.max(ax[0],bx[0]));
  var height = Math.abs(Math.min(by[1],ay[1]) - Math.max(ay[0],by[0]));
  return width * height;
}
module.exports = recOverlap;

function parse(arr) {
  return arr.map(function(el){
    return parseInt(el);
  }).sort();
}
/*
I: 8 coordinates, first 4 for rec1 and last 4 for rec2,
rectangles will be along straight lines
O: number of area units of overlap

Edge cases:
no overlap => 0
Rectangle completely encased in another
Size 0 rectangle
*/