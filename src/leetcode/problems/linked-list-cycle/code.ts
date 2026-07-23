export const CODE = [
  "function hasCycle(head) {", //                     0
  "  let slow = head, fast = head;", //              1
  "  while (fast && fast.next) {", //                2
  "    slow = slow.next;         // one step", //    3
  "    fast = fast.next.next;    // two steps", //   4
  "    if (slow === fast) return true;", //          5
  "  }", //                                          6
  "  return false;", //                              7
  "}", //                                            8
];
