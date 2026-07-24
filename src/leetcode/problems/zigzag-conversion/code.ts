export const CODE = [
  "function convert(s, numRows) {", //                              0
  "  if (numRows === 1) return s;", //                             1
  "  const rows = Array.from({length: numRows}, () => '');", //    2
  "  let r = 0, dir = -1;", //                                     3
  "  for (const c of s) {", //                                     4
  "    rows[r] += c;", //                                          5
  "    if (r === 0 || r === numRows - 1) dir = -dir;", //          6
  "    r += dir;", //                                              7
  "  }", //                                                        8
  "  return rows.join('');", //                                    9
  "}", //                                                          10
];
