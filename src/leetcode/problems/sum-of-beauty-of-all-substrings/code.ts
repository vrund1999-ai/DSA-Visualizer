export const CODE = [
  "function beautySum(s) {", //                               0
  "  let total = 0;", //                                      1
  "  for (let i = 0; i < s.length; i++) {", //                2
  "    const freq = {};", //                                  3
  "    for (let j = i; j < s.length; j++) {", //              4
  "      freq[s[j]] = (freq[s[j]] ?? 0) + 1;", //             5
  "      const counts = Object.values(freq);", //             6
  "      const beauty = Math.max(...counts)", //              7
  "        - Math.min(...counts);", //                        8
  "      total += beauty;", //                                9
  "    }", //                                                10
  "  }", //                                                  11
  "  return total;", //                                      12
  "}", //                                                    13
];
