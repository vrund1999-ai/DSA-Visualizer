export const CODE = [
  "function distanceK(root, target, k) {", //                 0
  "  const parent = new Map();", //                           1
  "  linkParents(root, null, parent);   // node -> parent", // 2
  "  const seen = new Set([target]);", //                     3
  "  let frontier = [target], dist = 0;", //                  4
  "  while (dist < k) {", //                                  5
  "    const next = [];", //                                  6
  "    for (const node of frontier)", //                      7
  "      for (const nb of [node.left, node.right, parent.get(node)])", // 8
  "        if (nb && !seen.has(nb)) {", //                    9
  "          seen.add(nb); next.push(nb);", //               10
  "        }", //                                            11
  "    frontier = next; dist++;   // expand one ring", //    12
  "  }", //                                                  13
  "  return frontier.map(n => n.val);", //                   14
  "}", //                                                    15
];
