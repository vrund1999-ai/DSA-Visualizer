export const CODE = [
  "function sumRootToLeaf(root) {", //                        0
  "  const dfs = (node, value) => {", //                      1
  "    if (!node) return 0;", //                              2
  "    value = value * 2 + node.val;   // shift in the bit", // 3
  "    if (!node.left && !node.right)", //                    4
  "      return value;   // leaf: path is complete", //       5
  "    return dfs(node.left, value)", //                      6
  "         + dfs(node.right, value);", //                    7
  "  };", //                                                  8
  "  return dfs(root, 0);", //                                9
  "}", //                                                    10
];
