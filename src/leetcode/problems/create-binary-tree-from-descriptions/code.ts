export const CODE = [
  "function createBinaryTree(descriptions) {", //             0
  "  const nodes = new Map();   // value -> node", //         1
  "  const hasParent = new Set();", //                        2
  "  for (const [p, c, isLeft] of descriptions) {", //        3
  "    if (!nodes.has(p)) nodes.set(p, {val: p});", //        4
  "    if (!nodes.has(c)) nodes.set(c, {val: c});", //        5
  "    if (isLeft) nodes.get(p).left = nodes.get(c);", //     6
  "    else nodes.get(p).right = nodes.get(c);", //           7
  "    hasParent.add(c);   // c is someone's child", //       8
  "  }", //                                                   9
  "  for (const [v, node] of nodes)", //                     10
  "    if (!hasParent.has(v)) return node;   // root", //    11
  "}", //                                                    12
];
