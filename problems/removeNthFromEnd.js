var ListNode = function(val) {
  this.val = val;
  this.next = null;
}

const removeNthFromEnd = (head, n) => {
  var curr = head;
  var removeHead = false;
  var length = 0;
  if (n === 0) {
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    return curr;
  }
  for (var i = 0; i < n-1; i++) {
    length++;
    if (curr.next) {
      curr = curr.next;
    } else {
      removeHead = true;
      break;
    }
  }
  if (removeHead) {
    return head.next;
  }
  curr.next = curr.next.next;
  return head;
}

module.exports = removeNthFromEnd;