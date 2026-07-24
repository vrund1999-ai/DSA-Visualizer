export const CODE = [
  "function rightSideView(root) {", //                        0
  "  const view = [], q = root ? [root] : [];", //           1
  "  while (q.length) {", //                                  2
  "    const size = q.length;", //                            3
  "    for (let i = 0; i < size; i++) {", //                  4
  "      const node = q.shift();", //                         5
  "      if (i === size - 1)", //                             6
  "        view.push(node.val);   // last in the level", //  7
  "      if (node.left)  q.push(node.left);", //             8
  "      if (node.right) q.push(node.right);", //            9
  "    }", //                                                 10
  "  }", //                                                   11
  "  return view;", //                                        12
  "}", //                                                     13
];
