export const CODE = [
  "function reorderList(head) {", //                                0
  "  // split, reverse second half, then weave", //                1
  "  let slow = head, fast = head;", //                            2
  "  while (fast.next && fast.next.next)", //                      3
  "    { slow = slow.next; fast = fast.next.next; }", //           4
  "  let second = reverse(slow.next);   // back half", //          5
  "  slow.next = null;", //                                        6
  "  let first = head;", //                                        7
  "  while (second) {   // interleave", //                         8
  "    [first.next, first] = [second, first.next];", //            9
  "    [second.next, second] = [first, second.next];", //          10
  "  }", //                                                        11
  "}", //                                                          12
];
