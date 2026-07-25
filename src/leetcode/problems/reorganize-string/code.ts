export const CODE = [
  "function reorganizeString(s) {", //                        0
  "  const count = tally(s);", //                             1
  "  const max = Math.max(...count.values());", //           2
  "  if (max > (s.length + 1) >> 1) return '';   // too many",//3
  "  const chars = [...count].sort((a, b) => b[1] - a[1]);", //4
  "  const res = new Array(s.length);", //                    5
  "  let i = 0;   // fill even indices, then odd", //         6
  "  for (const [ch, c] of chars) {", //                      7
  "    for (let k = 0; k < c; k++) {", //                     8
  "      res[i] = ch;", //                                    9
  "      i += 2;", //                                        10
  "      if (i >= s.length) i = 1;   // switch to odds", //  11
  "    }", //                                                12
  "  }", //                                                  13
  "  return res.join('');", //                               14
  "}", //                                                    15
];
