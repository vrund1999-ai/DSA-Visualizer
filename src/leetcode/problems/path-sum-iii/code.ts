export const CODE = [
  "function pathSum(root, target) {", //                      0
  "  const prefix = new Map([[0, 1]]);", //                   1
  "  let count = 0;", //                                      2
  "  function dfs(node, sum) {", //                           3
  "    if (!node) return;", //                                4
  "    sum += node.val;", //                                  5
  "    count += prefix.get(sum - target) || 0;", //           6
  "    prefix.set(sum, (prefix.get(sum) || 0) + 1);", //      7
  "    dfs(node.left, sum);", //                              8
  "    dfs(node.right, sum);", //                             9
  "    prefix.set(sum, prefix.get(sum) - 1);   // backtrack", //10
  "  }", //                                                  11
  "  dfs(root, 0);", //                                      12
  "  return count;", //                                      13
  "}", //                                                    14
];
