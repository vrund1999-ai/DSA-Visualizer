export const CODE = [
  "function leastBricks(wall) {", //                          0
  "  const edges = new Map();   // gap x -> count", //        1
  "  let best = 0;", //                                       2
  "  for (const row of wall) {", //                           3
  "    let x = 0;", //                                        4
  "    for (let i = 0; i < row.length - 1; i++) {", //        5
  "      x += row[i];   // inner gap position", //            6
  "      edges.set(x, (edges.get(x) || 0) + 1);", //         7
  "      best = Math.max(best, edges.get(x));", //           8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return wall.length - best;   // fewest crossed", //     11
  "}", //                                                    12
];
