export const CODE = [
  "function solveNQueens(n) {", //                                  0
  "  const res = [], cols = new Set(),", //                        1
  "    diag = new Set(), anti = new Set(), pos = [];", //          2
  "  function bt(r) {", //                                         3
  "    if (r === n) { res.push([...pos]); return; }", //          4
  "    for (let c = 0; c < n; c++) {", //                         5
  "      if (cols.has(c) || diag.has(r-c) || anti.has(r+c))", //  6
  "        continue;   // attacked", //                           7
  "      place(r, c); pos.push(c);", //                           8
  "      bt(r + 1);", //                                          9
  "      remove(r, c); pos.pop();   // backtrack", //             10
  "    }", //                                                     11
  "  }", //                                                       12
  "  bt(0);", //                                                  13
  "  return res;", //                                             14
  "}", //                                                         15
];
