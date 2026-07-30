export const CODE = [
  "function kthSmallest(matrix, k) {", //                     0
  "  const n = matrix.length;", //                            1
  "  let lo = matrix[0][0], hi = matrix[n-1][n-1];", //       2
  "  while (lo < hi) {", //                                   3
  "    const mid = (lo + hi) >> 1;", //                       4
  "    // count values <= mid via a staircase", //            5
  "    let count = 0, r = n - 1, c = 0;", //                  6
  "    while (r >= 0 && c < n) {", //                         7
  "      if (matrix[r][c] <= mid) {", //                      8
  "        count += r + 1;   // whole column up", //          9
  "        c++;", //                                         10
  "      } else r--;", //                                    11
  "    }", //                                                12
  "    if (count < k) lo = mid + 1;", //                     13
  "    else hi = mid;", //                                   14
  "  }", //                                                  15
  "  return lo;", //                                         16
  "}", //                                                    17
];
