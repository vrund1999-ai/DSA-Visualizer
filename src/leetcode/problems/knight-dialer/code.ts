export const CODE = [
  "function knightDialer(n) {", //                            0
  "  const MOD = 1e9 + 7;", //                                1
  "  const moves = [[4,6],[6,8],[7,9],[4,8],[3,9,0],", //     2
  "                 [],[1,7,0],[2,6],[1,3],[2,4]];", //       3
  "  let dp = Array(10).fill(1);   // length-1 numbers", //   4
  "  for (let step = 1; step < n; step++) {", //              5
  "    const next = Array(10).fill(0);", //                   6
  "    for (let d = 0; d < 10; d++)", //                      7
  "      for (const m of moves[d])", //                       8
  "        next[m] = (next[m] + dp[d]) % MOD;", //            9
  "    dp = next;", //                                       10
  "  }", //                                                  11
  "  return dp.reduce((a, b) => (a + b) % MOD, 0);", //      12
  "}", //                                                    13
];
