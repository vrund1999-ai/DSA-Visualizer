export const CODE = [
  "function minKnightMoves(x, y) {", //                       0
  "  const seen = new Set(['0,0']);", //                      1
  "  let frontier = [[0, 0]], moves = 0;", //                 2
  "  while (frontier.length) {", //                           3
  "    const next = [];", //                                  4
  "    for (const [r, c] of frontier) {", //                  5
  "      if (r === y && c === x) return moves;", //           6
  "      for (const [dr, dc] of KNIGHT) {", //                7
  "        const nr = r + dr, nc = c + dc;", //               8
  "        const key = nr + ',' + nc;", //                    9
  "        if (!seen.has(key)) {", //                        10
  "          seen.add(key); next.push([nr, nc]);", //        11
  "        }", //                                            12
  "      }", //                                              13
  "    }", //                                                14
  "    frontier = next; moves++;", //                        15
  "  }", //                                                  16
  "}", //                                                    17
];
