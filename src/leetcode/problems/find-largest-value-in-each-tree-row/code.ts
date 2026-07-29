export const CODE = [
  "function largestValues(root) {", //                        0
  "  if (!root) return [];", //                               1
  "  const res = [];", //                                     2
  "  let level = [root];", //                                 3
  "  while (level.length) {", //                              4
  "    let best = -Infinity;", //                             5
  "    const next = [];", //                                  6
  "    for (const node of level) {", //                       7
  "      best = Math.max(best, node.val);", //                8
  "      if (node.left) next.push(node.left);", //            9
  "      if (node.right) next.push(node.right);", //         10
  "    }", //                                                11
  "    res.push(best);   // row maximum", //                 12
  "    level = next;", //                                    13
  "  }", //                                                  14
  "  return res;", //                                        15
  "}", //                                                    16
];
