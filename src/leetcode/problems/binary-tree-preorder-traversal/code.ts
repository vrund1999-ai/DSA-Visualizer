export const CODE = [
  "function preorderTraversal(root) {", //                    0
  "  const out = [];", //                                     1
  "  const visit = (node) => {", //                           2
  "    if (!node) return;", //                                3
  "    out.push(node.val);   // 1. root", //                  4
  "    visit(node.left);     // 2. left subtree", //          5
  "    visit(node.right);    // 3. right subtree", //         6
  "  };", //                                                  7
  "  visit(root);", //                                        8
  "  return out;", //                                         9
  "}", //                                                    10
];
