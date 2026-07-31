export const CODE = [
  "function findRoot(nodes) {", //                            0
  "  let xorSum = 0;", //                                     1
  "  // every non-root value appears twice:", //             2
  "  //   once as a node, once as a child", //               3
  "  for (const node of nodes) {", //                        4
  "    xorSum ^= node.val;", //                              5
  "    for (const child of node.children)", //               6
  "      xorSum ^= child.val;", //                           7
  "  }", //                                                  8
  "  // only the root remains (appears once)", //            9
  "  return nodes.find(n => n.val === xorSum);", //         10
  "}", //                                                    11
];
