export const CODE = [
  "function isValidBST(root) {", //                                  0
  "  function dfs(node, low, high) {", //                           1
  "    if (!node) return true;", //                                 2
  "    if (node.val <= low || node.val >= high) return false;", //  3
  "    return dfs(node.left, low, node.val)", //                    4
  "        && dfs(node.right, node.val, high);", //                 5
  "  }", //                                                         6
  "  return dfs(root, -Infinity, Infinity);", //                    7
  "}", //                                                           8
];
