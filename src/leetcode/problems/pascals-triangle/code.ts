export const CODE = [
  "function generate(numRows) {", //                              0
  "  const tri = [];", //                                        1
  "  for (let r = 0; r < numRows; r++) {", //                    2
  "    const row = new Array(r + 1).fill(1);", //                3
  "    for (let c = 1; c < r; c++)", //                          4
  "      row[c] = tri[r-1][c-1] + tri[r-1][c];", //              5
  "    tri.push(row);", //                                       6
  "  }", //                                                      7
  "  return tri;", //                                            8
  "}", //                                                        9
];
