export const CODE = [
  "function zigzagLevelOrder(root) {", //                       0
  "  const res = [], q = root ? [root] : [];", //             1
  "  let ltr = true;   // left-to-right?", //                 2
  "  while (q.length) {", //                                  3
  "    const level = [], size = q.length;", //                4
  "    for (let k = 0; k < size; k++) {", //                  5
  "      const node = q.shift();", //                         6
  "      ltr ? level.push(node.val)", //                      7
  "          : level.unshift(node.val);   // reverse", //     8
  "      if (node.left) q.push(node.left);", //               9
  "      if (node.right) q.push(node.right);", //             10
  "    }", //                                                 11
  "    res.push(level); ltr = !ltr;", //                      12
  "  }", //                                                   13
  "  return res;", //                                         14
  "}", //                                                     15
];
