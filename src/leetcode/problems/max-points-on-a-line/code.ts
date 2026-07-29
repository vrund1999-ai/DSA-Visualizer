export const CODE = [
  "function maxPoints(points) {", //                          0
  "  let best = 1;", //                                       1
  "  for (let i = 0; i < points.length; i++) {", //           2
  "    const slopes = new Map();   // reduced dx,dy -> count", // 3
  "    for (let j = i + 1; j < points.length; j++) {", //     4
  "      let dx = points[j][0] - points[i][0];", //           5
  "      let dy = points[j][1] - points[i][1];", //           6
  "      const g = gcd(dx, dy);", //                          7
  "      const key = `${dx/g},${dy/g}`;   // normalized", //  8
  "      slopes.set(key, (slopes.get(key) ?? 1) + 1);", //    9
  "      best = Math.max(best, slopes.get(key));", //        10
  "    }", //                                                11
  "  }", //                                                  12
  "  return best;", //                                       13
  "}", //                                                    14
];
