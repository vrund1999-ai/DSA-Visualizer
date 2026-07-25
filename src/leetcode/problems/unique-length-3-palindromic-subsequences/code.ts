export const CODE = [
  "function countPalindromicSubsequence(s) {", //             0
  "  let total = 0;", //                                      1
  "  for (let c = 97; c < 123; c++) {", //                    2
  "    const ch = String.fromCharCode(c);", //                3
  "    const first = s.indexOf(ch);", //                      4
  "    const last = s.lastIndexOf(ch);", //                   5
  "    if (last - first < 2) continue;   // need a middle", // 6
  "    const middle = new Set(", //                           7
  "      s.slice(first + 1, last).split(''));", //            8
  "    total += middle.size;   // distinct centers", //       9
  "  }", //                                                  10
  "  return total;", //                                      11
  "}", //                                                    12
];
