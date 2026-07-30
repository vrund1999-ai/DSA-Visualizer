export const CODE = [
  "function swapNodes(head, k) {", //                         0
  "  let fast = head;", //                                    1
  "  for (let i = 1; i < k; i++) fast = fast.next;", //       2
  "  const first = fast;   // kth from start", //             3
  "  let slow = head;", //                                    4
  "  while (fast.next) {", //                                 5
  "    fast = fast.next;", //                                 6
  "    slow = slow.next;   // trails by k-1", //              7
  "  }", //                                                   8
  "  const second = slow;   // kth from end", //              9
  "  [first.val, second.val] =", //                          10
  "    [second.val, first.val];   // swap values", //        11
  "  return head;", //                                       12
  "}", //                                                    13
];
