var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
};

let node1 = { val: 1, next: null };
let node2 = { val: 2, next: null };
let node3 = { val: 3, next: null };
let node4 = { val: 4, next: null };
let node5 = { val: 5, next: null };
let node6 = { val: 6, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(middleNode(node1));
