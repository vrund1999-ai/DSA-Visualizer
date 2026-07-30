export const CODE = [
  "function binaryTreePaths(root) {", //                      0
  "  const res = [];", //                                     1
  "  function dfs(node, path) {", //                          2
  "    if (!node) return;", //                                3
  "    path = path ? path + '->' + node.val : '' + node.val;", //4
  "    if (!node.left && !node.right) {   // leaf", //        5
  "      res.push(path);", //                                 6
  "      return;", //                                         7
  "    }", //                                                 8
  "    dfs(node.left, path);", //                             9
  "    dfs(node.right, path);", //                           10
  "  }", //                                                  11
  "  dfs(root, '');", //                                     12
  "  return res;", //                                        13
  "}", //                                                    14
];
