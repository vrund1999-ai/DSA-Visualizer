export const CODE = [
  "function maximalRectangle(matrix) {", //                   0
  "  const n = matrix[0].length;", //                         1
  "  const h = new Array(n).fill(0);", //                     2
  "  let best = 0;", //                                       3
  "  for (const row of matrix) {", //                         4
  "    for (let c = 0; c < n; c++)", //                       5
  "      h[c] = row[c] === '1' ? h[c] + 1 : 0;   // heights",// 6
  "    best = Math.max(best, largestRect(h));", //            7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
  "// largestRect: monotonic stack over the histogram", //   11
];
