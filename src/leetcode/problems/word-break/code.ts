export const CODE = [
  "function wordBreak(s, dict) {", //                            0
  "  const words = new Set(dict);", //                          1
  "  const dp = Array(s.length + 1).fill(false);", //           2
  "  dp[0] = true;", //                                         3
  "  for (let i = 1; i <= s.length; i++)", //                   4
  "    for (let j = 0; j < i; j++)", //                         5
  "      if (dp[j] && words.has(s.slice(j, i))) {", //          6
  "        dp[i] = true; break;", //                            7
  "      }", //                                                 8
  "  return dp[s.length];", //                                  9
  "}", //                                                       10
];
