export const CODE = [
  "function widthOfBinaryTree(root) {", //                    0
  "  let best = 0;", //                                       1
  "  let q = [[root, 0]];   // node, position index", //      2
  "  while (q.length) {", //                                  3
  "    const first = q[0][1];", //                            4
  "    const last  = q[q.length - 1][1];", //                 5
  "    best = Math.max(best, last - first + 1);", //          6
  "    const next = [];", //                                  7
  "    for (const [node, pos] of q) {", //                    8
  "      if (node.left)  next.push([node.left,  2*pos]);", // 9
  "      if (node.right) next.push([node.right, 2*pos+1]);",//10
  "    }", //                                                11
  "    q = next;", //                                        12
  "  }", //                                                  13
  "  return best;", //                                       14
  "}", //                                                    15
];
