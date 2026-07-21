export const CODE = [
  "function mergeTwoLists(l1, l2) {", //           0
  "  const dummy = { next: null };", //            1
  "  let tail = dummy;", //                        2
  "  while (l1 && l2) {", //                       3
  "    if (l1.val <= l2.val) {", //                4
  "      tail.next = l1; l1 = l1.next;", //        5
  "    } else {", //                               6
  "      tail.next = l2; l2 = l2.next;", //        7
  "    }", //                                      8
  "    tail = tail.next;", //                      9
  "  }", //                                        10
  "  tail.next = l1 || l2;", //                    11
  "  return dummy.next;", //                       12
  "}", //                                          13
];
