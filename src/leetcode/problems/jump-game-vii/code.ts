export const CODE = [
  "function canReach(s, minJump, maxJump) {", //              0
  "  const n = s.length;", //                                 1
  "  const dp = new Array(n).fill(false);", //                2
  "  dp[0] = true;", //                                       3
  "  let windowReach = 0;   // reachable count in range", //  4
  "  for (let i = 1; i < n; i++) {", //                       5
  "    if (i >= minJump) windowReach += dp[i-minJump] ? 1:0;", // 6
  "    if (i > maxJump) windowReach -= dp[i-maxJump-1]?1:0;", // 7
  "    dp[i] = s[i] === '0' && windowReach > 0;", //          8
  "  }", //                                                   9
  "  return dp[n - 1];", //                                  10
  "}", //                                                    11
];
