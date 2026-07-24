export const CODE = [
  "function maxDepth(s) {", //                                0
  "  let depth = 0, max = 0;", //                             1
  "  for (const ch of s) {", //                               2
  "    if (ch === '(') {", //                                 3
  "      depth++;", //                                        4
  "      max = Math.max(max, depth);", //                     5
  "    } else if (ch === ')') {", //                          6
  "      depth--;", //                                        7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return max;", //                                         10
  "}", //                                                     11
];
