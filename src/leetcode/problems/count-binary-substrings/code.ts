export const CODE = [
  "function countBinarySubstrings(s) {", //                   0
  "  let prev = 0, cur = 1, count = 0;", //                   1
  "  for (let i = 1; i < s.length; i++) {", //                2
  "    if (s[i] === s[i - 1]) {", //                          3
  "      cur++;                    // extend current run", // 4
  "    } else {", //                                          5
  "      count += Math.min(prev, cur);", //                   6
  "      prev = cur; cur = 1;      // start a new run", //    7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return count + Math.min(prev, cur);", //                10
  "}", //                                                    11
];
