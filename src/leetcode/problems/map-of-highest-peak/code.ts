export const CODE = [
  "function highestPeak(isWater) {", //                       0
  "  const h = isWater.map(row =>", //                        1
  "    row.map(w => (w ? 0 : -1)));   // water = 0", //       2
  "  let frontier = [];", //                                  3
  "  isWater.forEach((row, r) => row.forEach((w, c) =>", //   4
  "    { if (w) frontier.push([r, c]); }));", //              5
  "  let height = 0;", //                                     6
  "  while (frontier.length) {", //                           7
  "    const next = [];", //                                  8
  "    for (const [r, c] of frontier)", //                    9
  "      for (const [nr, nc] of neighbors(r, c))", //        10
  "        if (h[nr]?.[nc] === -1) {", //                    11
  "          h[nr][nc] = height + 1;", //                    12
  "          next.push([nr, nc]);", //                       13
  "        }", //                                            14
  "    frontier = next; height++;", //                       15
  "  }", //                                                  16
  "  return h;", //                                          17
  "}", //                                                    18
];
