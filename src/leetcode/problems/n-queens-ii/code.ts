export const CODE = [
  "function totalNQueens(n) {", //                            0
  "  let count = 0;", //                                      1
  "  const cols = new Set(), d1 = new Set(), d2 = new Set();", // 2
  "  const place = (row) => {", //                            3
  "    if (row === n) { count++; return; }   // full board", // 4
  "    for (let c = 0; c < n; c++) {", //                     5
  "      if (cols.has(c) || d1.has(row-c) || d2.has(row+c))", // 6
  "        continue;   // attacked", //                       7
  "      cols.add(c); d1.add(row-c); d2.add(row+c);", //      8
  "      place(row + 1);", //                                 9
  "      cols.delete(c); d1.delete(row-c); d2.delete(row+c);", // 10
  "    }", //                                                11
  "  };", //                                                 12
  "  place(0);", //                                          13
  "  return count;", //                                      14
  "}", //                                                    15
];
