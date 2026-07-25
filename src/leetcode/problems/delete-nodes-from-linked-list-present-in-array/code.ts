export const CODE = [
  "function modifiedList(nums, head) {", //                   0
  "  const remove = new Set(nums);", //                       1
  "  const dummy = { next: head };", //                       2
  "  let prev = dummy;", //                                   3
  "  while (prev.next) {", //                                 4
  "    if (remove.has(prev.next.val))", //                    5
  "      prev.next = prev.next.next;   // unlink", //         6
  "    else", //                                              7
  "      prev = prev.next;             // keep", //           8
  "  }", //                                                   9
  "  return dummy.next;", //                                 10
  "}", //                                                    11
];
