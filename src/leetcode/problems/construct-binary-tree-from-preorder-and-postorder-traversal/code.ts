export const CODE = [
  "function constructFromPrePost(pre, post) {", //            0
  "  const pos = new Map(post.map((v, i) => [v, i]));", //    1
  "  function build(preL, preR, postL) {", //                 2
  "    const root = new TreeNode(pre[preL]);", //             3
  "    if (preL === preR) return root;", //                   4
  "    const leftRoot = pre[preL + 1];", //                   5
  "    const idx = pos.get(leftRoot);   // in post", //       6
  "    const leftSize = idx - postL + 1;", //                 7
  "    root.left =", //                                       8
  "      build(preL+1, preL+leftSize, postL);", //            9
  "    root.right =", //                                     10
  "      build(preL+leftSize+1, preR, idx+1);", //           11
  "    return root;", //                                     12
  "  }", //                                                  13
  "  return build(0, pre.length-1, 0);", //                  14
  "}", //                                                    15
];
