export const CODE = [
  "function inorderTraversal(root) {", //                    0
  "  const res = [], stack = [];", //                        1
  "  let node = root;", //                                   2
  "  while (node || stack.length) {", //                     3
  "    while (node) {", //                                   4
  "      stack.push(node); node = node.left;", //            5
  "    }", //                                                6
  "    node = stack.pop();", //                              7
  "    res.push(node.val);", //                              8
  "    node = node.right;", //                               9
  "  }", //                                                  10
  "  return res;", //                                        11
  "}", //                                                    12
];
