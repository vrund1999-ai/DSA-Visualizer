export const CODE = [
  "function scoreOfString(s) {", //                           0
  "  let score = 0;", //                                      1
  "  for (let i = 1; i < s.length; i++) {", //                2
  "    score += Math.abs(", //                                3
  "      s.charCodeAt(i) - s.charCodeAt(i - 1));", //         4
  "  }", //                                                   5
  "  return score;", //                                       6
  "}", //                                                     7
];
