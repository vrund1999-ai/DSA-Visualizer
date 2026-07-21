export const CODE = [
  "function longestCommonPrefix(strs) {", //                          0
  "  if (strs.length === 0) return '';", //                           1
  "  for (let col = 0; col < strs[0].length; col++) {", //            2
  "    const c = strs[0][col];", //                                   3
  "    for (let row = 1; row < strs.length; row++) {", //             4
  "      if (col >= strs[row].length || strs[row][col] !== c) {", //  5
  "        return strs[0].slice(0, col);", //                         6
  "      }", //                                                       7
  "    }", //                                                         8
  "  }", //                                                           9
  "  return strs[0];", //                                             10
  "}", //                                                             11
];
