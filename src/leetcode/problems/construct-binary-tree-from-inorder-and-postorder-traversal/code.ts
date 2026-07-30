export const CODE = [
  "function buildTree(inorder, postorder) {", //              0
  "  const pos = new Map(inorder.map((v, i) => [v, i]));", // 1
  "  let p = postorder.length - 1;", //                       2
  "  function build(lo, hi) {", //                            3
  "    if (lo > hi) return null;", //                         4
  "    const val = postorder[p--];   // last = root", //      5
  "    const node = new TreeNode(val);", //                   6
  "    const mid = pos.get(val);   // split inorder", //      7
  "    node.right = build(mid + 1, hi);   // right first", // 8
  "    node.left = build(lo, mid - 1);", //                   9
  "    return node;", //                                     10
  "  }", //                                                  11
  "  return build(0, inorder.length - 1);", //               12
  "}", //                                                    13
];
