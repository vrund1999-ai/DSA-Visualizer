export const CODE = [
  "function verticalOrder(root) {", //                        0
  "  if (!root) return [];", //                               1
  "  const cols = new Map();   // col -> [vals]", //          2
  "  const q = [[root, 0]];    // BFS with column index", //  3
  "  let min = 0, max = 0;", //                               4
  "  while (q.length) {", //                                  5
  "    const [node, col] = q.shift();", //                    6
  "    if (!cols.has(col)) cols.set(col, []);", //            7
  "    cols.get(col).push(node.val);", //                     8
  "    min = Math.min(min, col);", //                         9
  "    max = Math.max(max, col);", //                         10
  "    if (node.left)  q.push([node.left,  col - 1]);", //    11
  "    if (node.right) q.push([node.right, col + 1]);", //    12
  "  }", //                                                   13
  "  const res = [];", //                                     14
  "  for (let c = min; c <= max; c++) res.push(cols.get(c));", // 15
  "  return res;", //                                         16
  "}", //                                                     17
];
