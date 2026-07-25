export const CODE = [
  "function numberOfArrays(differences, lower, upper) {", //  0
  "  let prefix = 0, min = 0, max = 0;", //                   1
  "  for (const d of differences) {", //                      2
  "    prefix += d;   // value relative to x[0]", //          3
  "    min = Math.min(min, prefix);", //                      4
  "    max = Math.max(max, prefix);", //                      5
  "  }", //                                                   6
  "  const span = max - min;   // width the array occupies", // 7
  "  const room = (upper - lower) - span;", //                8
  "  return Math.max(0, room + 1);", //                       9
  "}", //                                                    10
];
