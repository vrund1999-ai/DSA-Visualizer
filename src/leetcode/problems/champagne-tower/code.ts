export const CODE = [
  "function champagneTower(poured, qRow, qGlass) {", //       0
  "  let row = [poured];   // top glass gets it all", //      1
  "  for (let r = 0; r < qRow; r++) {", //                    2
  "    const next = Array(r + 2).fill(0);", //                3
  "    for (let i = 0; i <= r; i++) {", //                    4
  "      const excess = (row[i] - 1) / 2;   // overflow", //  5
  "      if (excess > 0) {", //                               6
  "        next[i] += excess;", //                            7
  "        next[i + 1] += excess;   // split evenly", //      8
  "      }", //                                               9
  "    }", //                                                10
  "    row = next;", //                                      11
  "  }", //                                                  12
  "  return Math.min(1, row[qGlass]);   // glasses hold 1", //13
  "}", //                                                    14
];
