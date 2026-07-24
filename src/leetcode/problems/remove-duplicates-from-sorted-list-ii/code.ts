export const CODE = [
  "function deleteDuplicates(head) {", //                     0
  "  const dummy = { next: head };", //                       1
  "  let prev = dummy, cur = head;", //                       2
  "  while (cur) {", //                                       3
  "    if (cur.next && cur.val === cur.next.val) {", //       4
  "      const v = cur.val;", //                              5
  "      while (cur && cur.val === v) cur = cur.next;", //    6
  "      prev.next = cur;   // skip the whole run", //        7
  "    } else {", //                                          8
  "      prev = cur; cur = cur.next;", //                     9
  "    }", //                                                10
  "  }", //                                                  11
  "  return dummy.next;", //                                 12
  "}", //                                                    13
];
