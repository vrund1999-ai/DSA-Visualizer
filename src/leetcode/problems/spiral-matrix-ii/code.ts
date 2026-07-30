export const CODE = [
  "function generateMatrix(n) {", //                          0
  "  const m = grid(n, n, 0);", //                            1
  "  let top = 0, bottom = n - 1, left = 0, right = n - 1;", //2
  "  let v = 1;", //                                          3
  "  while (top <= bottom && left <= right) {", //            4
  "    for (let c = left; c <= right; c++) m[top][c] = v++;", //5
  "    top++;", //                                            6
  "    for (let r = top; r <= bottom; r++) m[r][right] = v++;", //7
  "    right--;", //                                          8
  "    for (let c = right; c >= left; c--) m[bottom][c] = v++;", //9
  "    bottom--;", //                                        10
  "    for (let r = bottom; r >= top; r--) m[r][left] = v++;", //11
  "    left++;", //                                          12
  "  }", //                                                  13
  "  return m;", //                                          14
  "}", //                                                    15
];
