export const CODE = [
  "function maximumGain(s, x, y) {", //                       0
  "  // remove the more valuable pair first", //              1
  "  let hi = 'ab', lo = 'ba', hp = x, lp = y;", //           2
  "  if (y > x) { hi = 'ba'; lo = 'ab'; hp = y; lp = x; }", //3
  "  let score = 0;", //                                      4
  "  const pass = (str, pair, pts) => {", //                  5
  "    const st = [];", //                                    6
  "    for (const ch of str) {", //                           7
  "      if (st.at(-1) === pair[0] && ch === pair[1]) {", //  8
  "        st.pop(); score += pts;   // remove pair", //      9
  "      } else st.push(ch);", //                            10
  "    }", //                                                11
  "    return st.join('');", //                              12
  "  };", //                                                 13
  "  pass(pass(s, hi, hp), lo, lp);", //                     14
  "  return score;", //                                      15
  "}", //                                                    16
];
