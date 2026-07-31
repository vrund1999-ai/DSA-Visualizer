export const CODE = [
  "function numOfWays(n) {", //                               0
  "  const MOD = 1e9 + 7;", //                                1
  "  // aba = row uses 2 colors, abc = 3 colors", //          2
  "  let aba = 6, abc = 6;   // row 1", //                    3
  "  for (let i = 2; i <= n; i++) {", //                      4
  "    // a 2-color row is followed by 3 abas + 2 abcs", //   5
  "    const nAba = (aba * 3 + abc * 2) % MOD;", //           6
  "    // a 3-color row is followed by 2 abas + 2 abcs", //   7
  "    const nAbc = (aba * 2 + abc * 2) % MOD;", //           8
  "    aba = nAba; abc = nAbc;", //                           9
  "  }", //                                                  10
  "  return (aba + abc) % MOD;", //                          11
  "}", //                                                    12
];
