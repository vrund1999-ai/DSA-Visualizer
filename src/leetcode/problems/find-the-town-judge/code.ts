export const CODE = [
  "function findJudge(n, trust) {", //                        0
  "  const net = new Array(n + 1).fill(0);", //               1
  "  for (const [a, b] of trust) {", //                       2
  "    net[a]--;   // a trusts someone", //                   3
  "    net[b]++;   // b is trusted", //                       4
  "  }", //                                                   5
  "  for (let p = 1; p <= n; p++)", //                        6
  "    if (net[p] === n - 1) return p;   // judge", //        7
  "  return -1;", //                                          8
  "}", //                                                     9
];
