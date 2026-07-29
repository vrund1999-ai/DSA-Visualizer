export const CODE = [
  "function findMinArrowShots(points) {", //                  0
  "  points.sort((a, b) => a[1] - b[1]);   // by end", //     1
  "  let arrows = 1;", //                                     2
  "  let arrowAt = points[0][1];   // shoot at first end", // 3
  "  for (let i = 1; i < points.length; i++) {", //           4
  "    if (points[i][0] > arrowAt) {   // balloon starts late", // 5
  "      arrows++;", //                                       6
  "      arrowAt = points[i][1];   // new arrow", //          7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return arrows;", //                                     10
  "}", //                                                    11
];
