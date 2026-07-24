export const CODE = [
  "function swapPairs(head) {", //                          0
  "  const dummy = { next: head };", //                    1
  "  let prev = dummy;", //                                2
  "  while (prev.next && prev.next.next) {", //            3
  "    const a = prev.next, b = a.next;", //               4
  "    a.next = b.next; b.next = a;   // swap", //         5
  "    prev.next = b;", //                                 6
  "    prev = a;                       // advance", //     7
  "  }", //                                                8
  "  return dummy.next;", //                               9
  "}", //                                                  10
];
