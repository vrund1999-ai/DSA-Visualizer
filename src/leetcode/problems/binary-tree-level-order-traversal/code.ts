export const CODE = [
  "function levelOrder(root) {", //                          0
  "  const res = [], queue = root ? [root] : [];", //       1
  "  while (queue.length) {", //                            2
  "    const level = [], size = queue.length;", //          3
  "    for (let k = 0; k < size; k++) {", //                4
  "      const node = queue.shift();", //                   5
  "      level.push(node.val);", //                         6
  "      if (node.left) queue.push(node.left);", //         7
  "      if (node.right) queue.push(node.right);", //       8
  "    }", //                                               9
  "    res.push(level);", //                                10
  "  }", //                                                 11
  "  return res;", //                                       12
  "}", //                                                   13
];
