export const CODE = [
  "function spiralOrder(matrix) {", //                                       0
  "  const res = [];", //                                                   1
  "  let top = 0, bottom = m - 1, left = 0, right = n - 1;", //             2
  "  while (top <= bottom && left <= right) {", //                          3
  "    for (let c = left; c <= right; c++) res.push(matrix[top][c]);", //   4
  "    top++;", //                                                          5
  "    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);", // 6
  "    right--;", //                                                        7
  "    if (top <= bottom)", //                                             8
  "      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);",// 9
  "    bottom--;", //                                                       10
  "    if (left <= right)", //                                             11
  "      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);", //12
  "    left++;", //                                                         13
  "  }", //                                                                 14
  "  return res;", //                                                       15
  "}", //                                                                   16
];
