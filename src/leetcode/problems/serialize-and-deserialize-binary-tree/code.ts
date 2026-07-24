export const CODE = [
  "function serialize(root) {", //                            0
  "  const out = [];", //                                     1
  "  (function dfs(node) {", //                               2
  "    if (!node) { out.push('#'); return; }  // null", //    3
  "    out.push(node.val);      // preorder: root", //        4
  "    dfs(node.left);          // then left", //             5
  "    dfs(node.right);         // then right", //            6
  "  })(root);", //                                           7
  "  return out.join(',');", //                               8
  "}", //                                                     9
];
