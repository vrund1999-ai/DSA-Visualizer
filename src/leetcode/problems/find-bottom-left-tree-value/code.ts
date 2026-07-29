export const CODE = [
  "function findBottomLeftValue(root) {", //                  0
  "  let queue = [root];", //                                 1
  "  let leftmost = root.val;", //                            2
  "  while (queue.length) {", //                              3
  "    leftmost = queue[0].val;   // first of this level", // 4
  "    const next = [];", //                                  5
  "    for (const node of queue) {", //                       6
  "      if (node.left) next.push(node.left);", //            7
  "      if (node.right) next.push(node.right);", //          8
  "    }", //                                                 9
  "    queue = next;", //                                    10
  "  }", //                                                  11
  "  return leftmost;   // last level's first node", //      12
  "}", //                                                    13
];
