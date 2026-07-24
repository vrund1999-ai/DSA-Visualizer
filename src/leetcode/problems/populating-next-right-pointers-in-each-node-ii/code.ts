export const CODE = [
  "function connect(root) {", //                              0
  "  let head = root;   // level being linked", //           1
  "  while (head) {", //                                     2
  "    const dummy = { next: null };  // next level", //     3
  "    let tail = dummy;", //                                4
  "    for (let n = head; n; n = n.next) {", //              5
  "      if (n.left)  { tail.next = n.left;  tail = tail.next; }",//6
  "      if (n.right) { tail.next = n.right; tail = tail.next; }",//7
  "    }", //                                                8
  "    head = dummy.next;   // descend", //                  9
  "  }", //                                                  10
  "  return root;", //                                       11
  "}", //                                                    12
];
