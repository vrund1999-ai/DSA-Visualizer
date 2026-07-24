export const CODE = [
  "function getIntersectionNode(headA, headB) {", //          0
  "  let a = headA, b = headB;", //                           1
  "  while (a !== b) {", //                                   2
  "    // switch lists at the end; both walk", //            3
  "    // lenA + lenB and meet at the join (or null)", //    4
  "    a = a ? a.next : headB;", //                           5
  "    b = b ? b.next : headA;", //                           6
  "  }", //                                                   7
  "  return a;   // intersection node or null", //           8
  "}", //                                                     9
];
