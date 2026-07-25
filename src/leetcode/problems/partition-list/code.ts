export const CODE = [
  "function partition(head, x) {", //                         0
  "  const less = { next: null }, more = { next: null };", // 1
  "  let lp = less, mp = more;", //                           2
  "  for (let n = head; n; n = n.next) {", //                 3
  "    if (n.val < x) { lp.next = n; lp = n; }", //           4
  "    else           { mp.next = n; mp = n; }", //           5
  "  }", //                                                   6
  "  mp.next = null;", //                                     7
  "  lp.next = more.next;   // splice the two lists", //      8
  "  return less.next;", //                                   9
  "}", //                                                    10
];
