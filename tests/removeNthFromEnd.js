const expect = require('chai').expect;
const removeNthFromEnd = require('../problems/removeNthFromEnd');

var ListNode = function(val) {
  this.val = val;
  this.next = null;
}

describe('Remove Nth From End', () => {
  it('Should return the head of the list', () => {
    var list = new ListNode(1);
    list.next = new ListNode(2);
    list.next.next = new ListNode(3);
    list.next.next.next = new ListNode(4);
    var list2 = new ListNode(1);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(4);
    expect(removeNthFromEnd(list,2)).to.equal(list2);
  });
  it('Should return null for empty lists', () => {
    var list1 = new ListNode(1);
    expect(removeNthFromEnd(list1, 2)).to.equal(null);
    expect(removeNthFromEnd(list1, 1)).to.equal(null); 
  });
  it('Should handle removing the end of the list2', () => {
    var list1 = new ListNode(1);
    list1.next = new ListNode(2);
    var list2 = new ListNode(1);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(3);
    expect(removeNthFromEnd(list2, 0)).to.equal(list1); 
  });
  it('Should handle removing the head of the list2', () => {
    var list1 = new ListNode(2);
    list1.next = new ListNode(3);
    var list2 = new ListNode(1);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(3);
    expect(removeNthFromEnd(list2, 2)).to.equal(list1); 
  });
    
})