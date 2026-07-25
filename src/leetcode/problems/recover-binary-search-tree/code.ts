export const CODE = [
  "function recoverTree(root) {", //                          0
  "  let first, second, prev = null;", //                     1
  "  const inorder = (n) => {", //                            2
  "    if (!n) return;", //                                   3
  "    inorder(n.left);", //                                  4
  "    if (prev && prev.val > n.val) {", //                   5
  "      if (!first) first = prev;   // 1st dip", //          6
  "      second = n;                 // last dip", //         7
  "    }", //                                                 8
  "    prev = n;", //                                         9
  "    inorder(n.right);", //                                10
  "  };", //                                                 11
  "  inorder(root);", //                                     12
  "  [first.val, second.val] = [second.val, first.val];", // 13
  "}", //                                                    14
];
