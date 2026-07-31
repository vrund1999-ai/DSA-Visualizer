export const CODE = [
  "function takeCharacters(s, k) {", //                       0
  "  const total = { a: 0, b: 0, c: 0 };", //                 1
  "  for (const c of s) total[c]++;", //                      2
  "  if (total.a < k || total.b < k || total.c < k)", //      3
  "    return -1;", //                                        4
  "  // longest middle window we can LEAVE untaken", //       5
  "  const win = { a: 0, b: 0, c: 0 };", //                   6
  "  let left = 0, best = 0;", //                             7
  "  for (let r = 0; r < s.length; r++) {", //                8
  "    win[s[r]]++;", //                                      9
  "    while (total[s[r]] - win[s[r]] < k) {", //            10
  "      win[s[left]]--; left++;   // must take from left", //11
  "    }", //                                                12
  "    best = Math.max(best, r - left + 1);", //             13
  "  }", //                                                  14
  "  return s.length - best;   // rest taken from ends", //  15
  "}", //                                                    16
];
