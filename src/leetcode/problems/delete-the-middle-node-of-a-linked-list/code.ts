export const CODE = [
  "function deleteMiddle(head) {", //                         0
  "  if (!head.next) return null;", //                        1
  "  let slow = head, fast = head, prev = null;", //          2
  "  while (fast && fast.next) {", //                         3
  "    prev = slow;", //                                      4
  "    slow = slow.next;        // +1 step", //               5
  "    fast = fast.next.next;   // +2 steps", //              6
  "  }", //                                                   7
  "  prev.next = slow.next;     // unlink the middle", //     8
  "  return head;", //                                        9
  "}", //                                                    10
];
