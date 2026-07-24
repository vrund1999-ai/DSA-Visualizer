export const CODE = [
  "function deleteDuplicates(head) {", //                   0
  "  let cur = head;", //                                   1
  "  while (cur && cur.next) {", //                         2
  "    if (cur.next.val === cur.val)", //                   3
  "      cur.next = cur.next.next;   // unlink dup", //     4
  "    else", //                                            5
  "      cur = cur.next;             // advance", //        6
  "  }", //                                                 7
  "  return head;", //                                      8
  "}", //                                                   9
];
