export const CODE = [
  "function minTimeToVisitAllPoints(points) {", //            0
  "  let time = 0;", //                                       1
  "  for (let i = 1; i < points.length; i++) {", //           2
  "    const dx = Math.abs(points[i][0] - points[i-1][0]);", // 3
  "    const dy = Math.abs(points[i][1] - points[i-1][1]);", // 4
  "    time += Math.max(dx, dy);   // diagonal + straight", // 5
  "  }", //                                                   6
  "  return time;", //                                        7
  "}", //                                                     8
];
