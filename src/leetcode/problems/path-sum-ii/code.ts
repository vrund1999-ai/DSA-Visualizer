export const CODE = [
  "function pathSum(root, target) {", //                      0
  "  const res = [], path = [];", //                          1
  "  (function dfs(node, remain) {", //                       2
  "    if (!node) return;", //                                3
  "    path.push(node.val);", //                              4
  "    remain -= node.val;", //                               5
  "    if (!node.left && !node.right && remain === 0)", //    6
  "      res.push([...path]);   // leaf hits target", //      7
  "    else {", //                                            8
  "      dfs(node.left, remain);", //                         9
  "      dfs(node.right, remain);", //                        10
  "    }", //                                                11
  "    path.pop();   // backtrack", //                        12
  "  })(root, target);", //                                  13
  "  return res;", //                                        14
  "}", //                                                    15
];
