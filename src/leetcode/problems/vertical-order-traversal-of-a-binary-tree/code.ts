export const CODE = [
  "function verticalTraversal(root) {", //                    0
  "  const nodes = [];   // {row, col, val}", //              1
  "  const dfs = (node, row, col) => {", //                   2
  "    if (!node) return;", //                                3
  "    nodes.push({ row, col, val: node.val });", //          4
  "    dfs(node.left,  row + 1, col - 1);", //                5
  "    dfs(node.right, row + 1, col + 1);", //                6
  "  };", //                                                  7
  "  dfs(root, 0, 0);", //                                    8
  "  nodes.sort((a, b) =>", //                                9
  "    a.col - b.col || a.row - b.row || a.val - b.val);", // 10
  "  // group consecutive equal columns", //                 11
  "  return groupByColumn(nodes);", //                        12
  "}", //                                                     13
];
