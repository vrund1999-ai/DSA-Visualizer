export const CODE = [
  "function findScore(nums) {", //                            0
  "  const order = nums.map((v, i) => [v, i])", //            1
  "    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);", //      2
  "  const marked = new Array(nums.length).fill(false);", //  3
  "  let score = 0;", //                                       4
  "  for (const [v, i] of order) {", //                       5
  "    if (marked[i]) continue;", //                          6
  "    score += v;", //                                        7
  "    marked[i] = true;", //                                  8
  "    if (i > 0) marked[i - 1] = true;", //                  9
  "    if (i + 1 < nums.length) marked[i + 1] = true;", //   10
  "  }", //                                                  11
  "  return score;", //                                      12
  "}", //                                                    13
];
