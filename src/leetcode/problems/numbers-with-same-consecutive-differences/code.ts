export const CODE = [
  "function numsSameConsecDiff(n, k) {", //                   0
  "  let level = [1, 2, 3, 4, 5, 6, 7, 8, 9];", //            1
  "  for (let len = 1; len < n; len++) {", //                 2
  "    const next = [];", //                                  3
  "    for (const num of level) {", //                        4
  "      const d = num % 10;   // last digit", //             5
  "      for (const nd of new Set([d + k, d - k])) {", //     6
  "        if (nd >= 0 && nd <= 9)", //                       7
  "          next.push(num * 10 + nd);", //                   8
  "      }", //                                               9
  "    }", //                                                10
  "    level = next;", //                                    11
  "  }", //                                                  12
  "  return level;", //                                      13
  "}", //                                                    14
];
