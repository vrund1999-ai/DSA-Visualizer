export const CODE = [
  "function kClosest(points, k) {", //                        0
  "  return points", //                                       1
  "    .map(p => [p, p[0]*p[0] + p[1]*p[1]])   // dist^2", // 2
  "    .sort((a, b) => a[1] - b[1])            // nearest 1st", // 3
  "    .slice(0, k)                            // take k", //  4
  "    .map(([p]) => p);", //                                 5
  "}", //                                                     6
];
