export const CODE = [
  "function minCameraCover(root) {", //                       0
  "  let cameras = 0;", //                                    1
  "  // 0 = needs cover, 1 = has camera, 2 = covered", //     2
  "  const dfs = (node) => {", //                             3
  "    if (!node) return 2;   // null is covered", //         4
  "    const l = dfs(node.left), r = dfs(node.right);", //    5
  "    if (l === 0 || r === 0) {", //                         6
  "      cameras++;   // a child is uncovered", //            7
  "      return 1;    // place a camera here", //             8
  "    }", //                                                 9
  "    if (l === 1 || r === 1) return 2;   // covered", //   10
  "    return 0;      // needs a parent camera", //          11
  "  };", //                                                 12
  "  if (dfs(root) === 0) cameras++;   // root uncovered", // 13
  "  return cameras;", //                                    14
  "}", //                                                    15
];
