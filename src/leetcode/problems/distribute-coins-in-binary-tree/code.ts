export const CODE = [
  "function distributeCoins(root) {", //                      0
  "  let moves = 0;", //                                       1
  "  function dfs(node) {", //                                 2
  "    if (!node) return 0;", //                               3
  "    const left = dfs(node.left);", //                       4
  "    const right = dfs(node.right);", //                     5
  "    moves += Math.abs(left) + Math.abs(right);", //         6
  "    // excess this subtree must pass to its parent", //     7
  "    return node.val - 1 + left + right;", //                8
  "  }", //                                                    9
  "  dfs(root);", //                                          10
  "  return moves;", //                                       11
  "}", //                                                     12
];
