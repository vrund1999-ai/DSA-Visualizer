export const CODE = [
  "function getHint(secret, guess) {", //                     0
  "  let bulls = 0, cows = 0;", //                            1
  "  const s = Array(10).fill(0), g = Array(10).fill(0);", // 2
  "  for (let i = 0; i < secret.length; i++) {", //           3
  "    if (secret[i] === guess[i]) {", //                     4
  "      bulls++;   // right digit, right spot", //           5
  "    } else {", //                                          6
  "      s[+secret[i]]++;", //                                7
  "      g[+guess[i]]++;", //                                 8
  "    }", //                                                 9
  "  }", //                                                  10
  "  for (let d = 0; d < 10; d++)", //                       11
  "    cows += Math.min(s[d], g[d]);   // misplaced", //     12
  "  return `${bulls}A${cows}B`;", //                        13
  "}", //                                                    14
];
