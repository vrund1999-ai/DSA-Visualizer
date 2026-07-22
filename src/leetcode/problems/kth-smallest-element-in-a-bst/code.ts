export const CODE = [
  "function kthSmallest(root, k) {", //                     0
  "  const stack = [];", //                                 1
  "  let node = root;", //                                  2
  "  while (node || stack.length) {", //                    3
  "    while (node) { stack.push(node); node = node.left; }",// 4
  "    node = stack.pop();", //                             5
  "    if (--k === 0) return node.val;", //                 6
  "    node = node.right;", //                              7
  "  }", //                                                 8
  "}", //                                                   9
];
