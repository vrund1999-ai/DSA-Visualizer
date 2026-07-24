export const CODE = [
  "function removeElements(head, val) {", //                  0
  "  const dummy = { next: head };", //                       1
  "  let prev = dummy;", //                                   2
  "  while (prev.next) {", //                                 3
  "    if (prev.next.val === val) {", //                      4
  "      prev.next = prev.next.next;  // unlink", //          5
  "    } else {", //                                          6
  "      prev = prev.next;   // advance", //                  7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return dummy.next;", //                                  10
  "}", //                                                     11
];
