export const CODE = [
  "function eraseOverlapIntervals(intervals) {", //           0
  "  intervals.sort((a, b) => a[1] - b[1]);   // by end", //  1
  "  let count = 0, end = -Infinity;", //                     2
  "  for (const [s, e] of intervals) {", //                   3
  "    if (s >= end) {", //                                   4
  "      end = e;   // keep it, extend the frontier", //      5
  "    } else {", //                                          6
  "      count++;   // overlaps — remove this one", //        7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return count;", //                                      10
  "}", //                                                    11
];
