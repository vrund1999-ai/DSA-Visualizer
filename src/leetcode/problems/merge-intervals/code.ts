export const CODE = [
  "function merge(intervals) {", //                       0
  "  intervals.sort((a, b) => a[0] - b[0]);", //          1
  "  const merged = [];", //                              2
  "  for (const [start, end] of intervals) {", //         3
  "    const last = merged[merged.length - 1];", //       4
  "    if (last && start <= last[1]) {", //               5
  "      last[1] = Math.max(last[1], end);", //           6
  "    } else {", //                                      7
  "      merged.push([start, end]);", //                  8
  "    }", //                                             9
  "  }", //                                               10
  "  return merged;", //                                  11
  "}", //                                                 12
];
