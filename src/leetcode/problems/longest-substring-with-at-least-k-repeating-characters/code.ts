export const CODE = [
  "function longestSubstring(s, k) {", //                     0
  "  const solve = (lo, hi) => {", //                         1
  "    if (hi - lo < k) return 0;", //                        2
  "    const freq = {};", //                                  3
  "    for (let i = lo; i < hi; i++)", //                     4
  "      freq[s[i]] = (freq[s[i]] ?? 0) + 1;", //             5
  "    for (let m = lo; m < hi; m++) {", //                   6
  "      if (freq[s[m]] < k) {   // rare char = split point", //7
  "        let best = 0, start = lo;", //                     8
  "        for (let i = lo; i < hi; i++)", //                 9
  "          if (freq[s[i]] < k) {", //                      10
  "            best = Math.max(best, solve(start, i));", //  11
  "            start = i + 1;", //                           12
  "          }", //                                          13
  "        return Math.max(best, solve(start, hi));", //     14
  "      }", //                                              15
  "    }", //                                                16
  "    return hi - lo;   // all chars appear >= k", //       17
  "  };", //                                                 18
  "  return solve(0, s.length);", //                         19
  "}", //                                                    20
];
