export const CODE = [
  "function removeNthFromEnd(head, n) {", //                    0
  "  const dummy = { next: head };", //                        1
  "  let fast = dummy, slow = dummy;", //                      2
  "  for (let i = 0; i < n; i++) fast = fast.next;  // gap", //3
  "  while (fast.next) {", //                                  4
  "    fast = fast.next; slow = slow.next;", //                5
  "  }", //                                                    6
  "  slow.next = slow.next.next;   // unlink", //              7
  "  return dummy.next;", //                                   8
  "}", //                                                      9
];
