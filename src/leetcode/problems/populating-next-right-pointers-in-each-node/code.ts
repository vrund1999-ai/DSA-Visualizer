export const CODE = [
  "function connect(root) {", //                              0
  "  if (!root) return null;", //                             1
  "  let leftmost = root;", //                                2
  "  while (leftmost.left) {", //                             3
  "    let head = leftmost;", //                              4
  "    while (head) {", //                                    5
  "      head.left.next = head.right;   // same parent", //   6
  "      if (head.next)", //                                  7
  "        head.right.next = head.next.left;  // across", //  8
  "      head = head.next;", //                               9
  "    }", //                                                 10
  "    leftmost = leftmost.left;", //                         11
  "  }", //                                                   12
  "  return root;", //                                        13
  "}", //                                                     14
];
