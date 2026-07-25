export const CODE = [
  "function reverseBetween(head, left, right) {", //          0
  "  const dummy = { next: head };", //                       1
  "  let prev = dummy;", //                                   2
  "  for (let i = 1; i < left; i++) prev = prev.next;", //    3
  "  let cur = prev.next;   // first node to move", //        4
  "  for (let i = 0; i < right - left; i++) {", //            5
  "    const nxt = cur.next;", //                             6
  "    cur.next = nxt.next;   // splice nxt out", //          7
  "    nxt.next = prev.next;  // move it to the front", //    8
  "    prev.next = nxt;", //                                  9
  "  }", //                                                  10
  "  return dummy.next;", //                                 11
  "}", //                                                    12
];
