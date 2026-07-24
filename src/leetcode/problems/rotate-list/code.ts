export const CODE = [
  "function rotateRight(head, k) {", //                             0
  "  if (!head) return head;", //                                  1
  "  let n = 1, tail = head;", //                                  2
  "  while (tail.next) { tail = tail.next; n++; }", //             3
  "  k %= n;   // effective rotations", //                         4
  "  if (k === 0) return head;", //                                5
  "  tail.next = head;             // close the ring", //          6
  "  let steps = n - k, newTail = head;", //                       7
  "  while (--steps) newTail = newTail.next;", //                  8
  "  const newHead = newTail.next;", //                            9
  "  newTail.next = null;          // break the ring", //          10
  "  return newHead;", //                                          11
  "}", //                                                          12
];
