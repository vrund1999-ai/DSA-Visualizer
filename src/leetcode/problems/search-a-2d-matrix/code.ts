export const CODE = [
  "function searchMatrix(matrix, target) {", //                    0
  "  const m = matrix.length, n = matrix[0].length;", //          1
  "  let lo = 0, hi = m * n - 1;", //                             2
  "  while (lo <= hi) {", //                                      3
  "    const mid = (lo + hi) >> 1;", //                           4
  "    const val = matrix[Math.floor(mid / n)][mid % n];", //     5
  "    if (val === target) return true;", //                      6
  "    if (val < target) lo = mid + 1;", //                       7
  "    else hi = mid - 1;", //                                    8
  "  }", //                                                       9
  "  return false;", //                                           10
  "}", //                                                         11
];
