export const CODE = [
  "function reverseKGroup(head, k) {", //                     0
  "  let node = head, count = 0;", //                         1
  "  while (node && count < k) { node = node.next; count++; }",//2
  "  if (count < k) return head;   // leftover tail", //      3
  "  let prev = reverseKGroup(node, k);  // rest first", //   4
  "  let cur = head;", //                                     5
  "  for (let i = 0; i < k; i++) {   // reverse this group",//6
  "    const nxt = cur.next;", //                             7
  "    cur.next = prev;", //                                  8
  "    prev = cur;", //                                       9
  "    cur = nxt;", //                                        10
  "  }", //                                                   11
  "  return prev;   // new head of this group", //            12
  "}", //                                                     13
];
