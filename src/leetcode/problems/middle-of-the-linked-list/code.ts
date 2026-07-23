export const CODE = [
  "function middleNode(head) {", //                   0
  "  let slow = head, fast = head;", //              1
  "  while (fast && fast.next) {", //                2
  "    slow = slow.next;         // one step", //    3
  "    fast = fast.next.next;    // two steps", //   4
  "  }", //                                          5
  "  return slow;   // fast at end → slow at mid", //6
  "}", //                                            7
];
