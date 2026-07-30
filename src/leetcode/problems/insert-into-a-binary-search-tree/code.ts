export const CODE = [
  "function insertIntoBST(root, val) {", //                   0
  "  if (!root) return new TreeNode(val);", //                1
  "  let node = root;", //                                    2
  "  while (true) {", //                                      3
  "    if (val < node.val) {   // go left", //                4
  "      if (!node.left) { node.left = new TreeNode(val); break; }", //5
  "      node = node.left;", //                               6
  "    } else {   // go right", //                            7
  "      if (!node.right) { node.right = new TreeNode(val); break; }", //8
  "      node = node.right;", //                              9
  "    }", //                                                10
  "  }", //                                                  11
  "  return root;", //                                       12
  "}", //                                                    13
];
