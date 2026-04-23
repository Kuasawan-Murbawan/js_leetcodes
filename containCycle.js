var containCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
};

let node1 = { val: 1, next: null };
let node2 = { val: 2, next: null };
let node3 = { val: 3, next: null };
let node4 = { val: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node2;

console.log(containCycle(node1));
