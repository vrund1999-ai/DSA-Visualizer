export const CODE = [
  "function sumNumbers(root) {", //                           0
  "  const dfs = (node, cur) => {", //                        1
  "    if (!node) return 0;", //                              2
  "    cur = cur * 10 + node.val;   // extend the number", // 3
  "    if (!node.left && !node.right)", //                    4
  "      return cur;   // leaf: full number", //              5
  "    return dfs(node.left, cur)", //                        6
  "         + dfs(node.right, cur);", //                      7
  "  };", //                                                  8
  "  return dfs(root, 0);", //                                9
  "}", //                                                    10
];
