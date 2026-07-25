export const CODE = [
  "function numDecodings(s) {", //                            0
  "  if (s[0] === '0') return 0;", //                         1
  "  const dp = new Array(s.length + 1).fill(0);", //         2
  "  dp[0] = 1; dp[1] = 1;", //                               3
  "  for (let i = 2; i <= s.length; i++) {", //               4
  "    if (s[i - 1] !== '0') dp[i] += dp[i - 1];   // 1-digit", // 5
  "    const two = +s.slice(i - 2, i);", //                   6
  "    if (two >= 10 && two <= 26) dp[i] += dp[i - 2]; // 2", // 7
  "  }", //                                                   8
  "  return dp[s.length];", //                                9
  "}", //                                                    10
];
