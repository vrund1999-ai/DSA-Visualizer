export const CODE = [
  "function largestTriangleArea(points) {", //                0
  "  let best = 0;", //                                       1
  "  const n = points.length;", //                            2
  "  for (let i = 0; i < n; i++)", //                         3
  "    for (let j = i + 1; j < n; j++)", //                   4
  "      for (let k = j + 1; k < n; k++) {", //               5
  "        const [x1, y1] = points[i];", //                   6
  "        const [x2, y2] = points[j];", //                   7
  "        const [x3, y3] = points[k];", //                   8
  "        const area = Math.abs(", //                        9
  "          x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2;", // 10
  "        best = Math.max(best, area);", //                 11
  "      }", //                                              12
  "  return best;", //                                       13
  "}", //                                                    14
];
