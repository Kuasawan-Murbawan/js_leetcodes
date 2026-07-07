//  Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// use array push

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	let arr1 = [];

	while (l1 !== null) {
		arr1.push(l1.val);
		l1 = l1.next;
	}

	arr1 = arr1.reverse();
	let s1 = Number(arr1.join(""));

	let arr2 = [];

	while (l2 !== null) {
		arr2.push(l2.val);
		l2 = l2.next;
	}

	arr2 = arr2.reverse();
	let s2 = Number(arr2.join(""));

	let total = s1 + s2;

	let stotal = String(total);
	let ind = stotal.length;

	let arrans: ListNode[] = [];

	for (let i = 0; i < ind; i++) {
		if (i == 0) {
			arrans.push(new ListNode(Number(stotal[i]), null));
		} else {
			arrans.push(new ListNode(Number(stotal[i]), arrans[i - 1]));
		}
	}

	return arrans[arrans.length - 1];
}

const ex1 = new ListNode(3);
const ex2 = new ListNode(4, ex1);
const ex3 = new ListNode(2, ex2);

const exa = new ListNode(4);
const exb = new ListNode(6, exa);
const exc = new ListNode(5, exb);

let answer = addTwoNumbers(ex3, exc);

while (answer != null) {
	console.log(answer.val);
	answer = answer.next;
}
