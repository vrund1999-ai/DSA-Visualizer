export const CODE = [
  "function postorderTraversal(root) {", //                   0
  "  const out = [];", //                                     1
  "  const visit = (node) => {", //                           2
  "    if (!node) return;", //                                3
  "    visit(node.left);     // 1. left subtree", //          4
  "    visit(node.right);    // 2. right subtree", //         5
  "    out.push(node.val);   // 3. node last", //             6
  "  };", //                                                  7
  "  visit(root);", //                                        8
  "  return out;", //                                         9
  "}", //                                                    10
];
