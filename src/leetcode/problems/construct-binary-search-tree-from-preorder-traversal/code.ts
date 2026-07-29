export const CODE = [
  "function bstFromPreorder(preorder) {", //                  0
  "  let i = 0;", //                                          1
  "  const build = (bound) => {", //                          2
  "    if (i === preorder.length ||", //                      3
  "        preorder[i] > bound) return null;", //             4
  "    const node = { val: preorder[i++] };", //              5
  "    node.left = build(node.val);   // < val", //           6
  "    node.right = build(bound);     // < bound", //         7
  "    return node;", //                                      8
  "  };", //                                                  9
  "  return build(Infinity);", //                            10
  "}", //                                                    11
];
