export const CODE = [
  "function findMinDifference(timePoints) {", //              0
  "  const mins = timePoints.map(t => {", //                  1
  "    const [h, m] = t.split(':').map(Number);", //          2
  "    return h * 60 + m;", //                                3
  "  });", //                                                 4
  "  mins.sort((a, b) => a - b);", //                         5
  "  let best = Infinity;", //                                6
  "  for (let i = 1; i < mins.length; i++)", //               7
  "    best = Math.min(best, mins[i] - mins[i - 1]);", //     8
  "  // wrap-around across midnight", //                      9
  "  best = Math.min(best,", //                              10
  "    1440 - mins[mins.length - 1] + mins[0]);", //         11
  "  return best;", //                                       12
  "}", //                                                    13
];
