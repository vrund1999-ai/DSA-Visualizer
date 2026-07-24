export const CODE = [
  "function sortList(head) {", //                             0
  "  if (!head || !head.next) return head;", //              1
  "  // split in half with slow/fast pointers", //           2
  "  let slow = head, fast = head.next;", //                 3
  "  while (fast && fast.next) {", //                         4
  "    slow = slow.next; fast = fast.next.next;", //         5
  "  }", //                                                   6
  "  const mid = slow.next; slow.next = null;", //           7
  "  const L = sortList(head), R = sortList(mid);", //       8
  "  return merge(L, R);   // merge two sorted halves", //   9
  "}", //                                                    10
];
