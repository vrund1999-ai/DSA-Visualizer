export const CODE = [
  "function lowestCommonAncestor(root, p, q) {", //       0
  "  let node = root;", //                                1
  "  while (node) {", //                                  2
  "    if (p < node.val && q < node.val)", //             3
  "      node = node.left;", //                           4
  "    else if (p > node.val && q > node.val)", //        5
  "      node = node.right;", //                          6
  "    else", //                                          7
  "      return node;         // the split point", //     8
  "  }", //                                               9
  "}", //                                                 10
];
