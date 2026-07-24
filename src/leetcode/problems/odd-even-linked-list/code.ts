export const CODE = [
  "function oddEvenList(head) {", //                          0
  "  if (!head) return head;", //                            1
  "  let odd = head, even = head.next;", //                  2
  "  const evenHead = even;", //                             3
  "  while (even && even.next) {", //                        4
  "    odd.next = even.next; odd = odd.next;", //            5
  "    even.next = odd.next; even = even.next;", //          6
  "  }", //                                                  7
  "  odd.next = evenHead;   // splice evens after odds", //  8
  "  return head;", //                                       9
  "}", //                                                    10
];
