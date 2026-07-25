export const CODE = [
  "function isEvenOddTree(root) {", //                        0
  "  let level = 0, q = [root];", //                          1
  "  while (q.length) {", //                                  2
  "    const even = level % 2 === 0;", //                     3
  "    let prev = even ? -Infinity : Infinity;", //           4
  "    const next = [];", //                                  5
  "    for (const node of q) {", //                           6
  "      if (even && (node.val % 2 === 0 ||", //              7
  "                   node.val <= prev)) return false;", //   8
  "      if (!even && (node.val % 2 === 1 ||", //             9
  "                    node.val >= prev)) return false;", //  10
  "      prev = node.val;", //                                11
  "      if (node.left)  next.push(node.left);", //           12
  "      if (node.right) next.push(node.right);", //          13
  "    }", //                                                 14
  "    q = next; level++;", //                                15
  "  }", //                                                   16
  "  return true;", //                                        17
  "}", //                                                     18
];
