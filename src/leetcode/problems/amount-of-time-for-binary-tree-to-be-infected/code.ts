export const CODE = [
  "function amountOfTime(root, start) {", //                  0
  "  const adj = new Map();   // value -> neighbors", //      1
  "  buildGraph(root, adj);   // link parent<->child", //     2
  "  let queue = [start], minutes = -1;", //                  3
  "  const seen = new Set([start]);", //                      4
  "  while (queue.length) {", //                              5
  "    const next = [];", //                                  6
  "    for (const v of queue)", //                            7
  "      for (const u of adj.get(v) || [])", //               8
  "        if (!seen.has(u)) {", //                           9
  "          seen.add(u); next.push(u);", //                 10
  "        }", //                                            11
  "    queue = next; minutes++;   // one more spread", //    12
  "  }", //                                                  13
  "  return minutes;", //                                    14
  "}", //                                                    15
];
