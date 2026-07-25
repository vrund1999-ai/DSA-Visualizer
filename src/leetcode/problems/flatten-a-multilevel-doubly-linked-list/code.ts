export const CODE = [
  "function flatten(head) {", //                              0
  "  let cur = head;", //                                     1
  "  while (cur) {", //                                       2
  "    if (cur.child) {", //                                  3
  "      const next = cur.next;", //                          4
  "      cur.next = cur.child;   // splice child in", //      5
  "      cur.child.prev = cur;", //                           6
  "      cur.child = null;", //                               7
  "      let tail = cur.next;", //                            8
  "      while (tail.next) tail = tail.next;   // child end", // 9
  "      tail.next = next;       // reattach the rest", //   10
  "      if (next) next.prev = tail;", //                    11
  "    }", //                                                12
  "    cur = cur.next;", //                                  13
  "  }", //                                                  14
  "  return head;", //                                       15
  "}", //                                                    16
];
