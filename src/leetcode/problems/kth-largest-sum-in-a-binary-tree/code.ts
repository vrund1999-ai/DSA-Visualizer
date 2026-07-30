export const CODE = [
  "function kthLargestLevelSum(root, k) {", //                0
  "  const sums = [];", //                                    1
  "  let level = [root];", //                                 2
  "  while (level.length) {", //                              3
  "    let sum = 0;", //                                      4
  "    const next = [];", //                                  5
  "    for (const node of level) {", //                       6
  "      sum += node.val;", //                                7
  "      if (node.left) next.push(node.left);", //            8
  "      if (node.right) next.push(node.right);", //          9
  "    }", //                                                10
  "    sums.push(sum);", //                                  11
  "    level = next;", //                                    12
  "  }", //                                                  13
  "  if (sums.length < k) return -1;", //                    14
  "  sums.sort((a, b) => b - a);", //                        15
  "  return sums[k - 1];", //                                16
  "}", //                                                    17
];
