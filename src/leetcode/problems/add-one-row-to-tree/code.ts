export const CODE = [
  "function addOneRow(root, val, depth) {", //                0
  "  if (depth === 1)", //                                    1
  "    return { val, left: root, right: null };", //          2
  "  const dfs = (node, d) => {", //                          3
  "    if (!node) return;", //                                4
  "    if (d === depth - 1) {", //                            5
  "      node.left  = { val, left: node.left,  right: null };",//6
  "      node.right = { val, left: null, right: node.right };",//7
  "      return;   // don't recurse past insertion", //       8
  "    }", //                                                 9
  "    dfs(node.left, d + 1);", //                           10
  "    dfs(node.right, d + 1);", //                          11
  "  };", //                                                 12
  "  dfs(root, 1);", //                                      13
  "  return root;", //                                       14
  "}", //                                                    15
];
