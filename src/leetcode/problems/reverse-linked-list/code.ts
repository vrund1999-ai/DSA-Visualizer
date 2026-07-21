export const CODE = [
  "function reverseList(head) {", //             0
  "  let prev = null, cur = head;", //           1
  "  while (cur) {", //                          2
  "    const next = cur.next;", //               3
  "    cur.next = prev;", //                     4
  "    prev = cur;", //                          5
  "    cur = next;", //                          6
  "  }", //                                      7
  "  return prev;", //                           8
  "}", //                                        9
];
