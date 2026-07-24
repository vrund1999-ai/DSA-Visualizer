export const CODE = [
  "function detectCycle(head) {", //                          0
  "  let slow = head, fast = head;", //                       1
  "  while (fast && fast.next) {", //                         2
  "    slow = slow.next;          // +1", //                  3
  "    fast = fast.next.next;     // +2", //                  4
  "    if (slow === fast) {       // they meet", //           5
  "      let p = head;", //                                   6
  "      while (p !== slow) {", //                            7
  "        p = p.next; slow = slow.next;", //                 8
  "      }", //                                               9
  "      return p;   // cycle entry", //                     10
  "    }", //                                                11
  "  }", //                                                  12
  "  return null;   // no cycle", //                         13
  "}", //                                                    14
];
