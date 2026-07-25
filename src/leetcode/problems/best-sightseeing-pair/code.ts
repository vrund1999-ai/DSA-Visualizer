export const CODE = [
  "function maxScoreSightseeingPair(values) {", //            0
  "  let best = values[0] + 0;   // best (values[i] + i)", // 1
  "  let ans = -Infinity;", //                                2
  "  for (let j = 1; j < values.length; j++) {", //           3
  "    ans = Math.max(ans, best + values[j] - j);", //        4
  "    best = Math.max(best, values[j] + j);", //             5
  "  }", //                                                   6
  "  return ans;", //                                         7
  "}", //                                                     8
];
