export const CODE = [
  "function rob(root) {", //                                  0
  "  function dfs(node) {", //                                1
  "    if (!node) return [0, 0];   // [rob, skip]", //        2
  "    const l = dfs(node.left);", //                         3
  "    const r = dfs(node.right);", //                        4
  "    // rob this: must skip both children", //              5
  "    const robThis = node.val + l[1] + r[1];", //           6
  "    // skip this: children free to choose", //             7
  "    const skipThis = Math.max(...l) + Math.max(...r);", // 8
  "    return [robThis, skipThis];", //                       9
  "  }", //                                                  10
  "  return Math.max(...dfs(root));", //                     11
  "}", //                                                    12
];
