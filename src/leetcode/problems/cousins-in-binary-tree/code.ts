export const CODE = [
  "function isCousins(root, x, y) {", //                      0
  "  let q = [[root, null]];   // node, parent", //           1
  "  while (q.length) {", //                                  2
  "    const next = [], found = {};", //                      3
  "    for (const [node, parent] of q) {", //                 4
  "      if (node.val === x) found.x = parent;", //           5
  "      if (node.val === y) found.y = parent;", //           6
  "      if (node.left)  next.push([node.left, node]);", //   7
  "      if (node.right) next.push([node.right, node]);", //  8
  "    }", //                                                 9
  "    if (found.x || found.y)   // same depth?", //         10
  "      return found.x && found.y && found.x !== found.y;",//11
  "    q = next;", //                                        12
  "  }", //                                                  13
  "  return false;", //                                      14
  "}", //                                                    15
];
