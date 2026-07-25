export const CODE = [
  "function minDepth(root) {", //                             0
  "  if (!root) return 0;", //                                1
  "  let q = [root], depth = 1;", //                          2
  "  while (q.length) {", //                                  3
  "    const next = [];", //                                  4
  "    for (const node of q) {", //                           5
  "      if (!node.left && !node.right)", //                  6
  "        return depth;   // first leaf reached", //         7
  "      if (node.left)  next.push(node.left);", //           8
  "      if (node.right) next.push(node.right);", //          9
  "    }", //                                                 10
  "    q = next; depth++;", //                                11
  "  }", //                                                   12
  "}", //                                                     13
];
