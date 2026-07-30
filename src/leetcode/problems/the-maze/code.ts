export const CODE = [
  "function hasPath(maze, start, dest) {", //                 0
  "  const seen = new Set([start.join(',')]);", //            1
  "  const queue = [start];", //                              2
  "  while (queue.length) {", //                              3
  "    const [r, c] = queue.shift();", //                     4
  "    if (r === dest[0] && c === dest[1]) return true;", //  5
  "    for (const [dr, dc] of DIRS) {", //                    6
  "      let [nr, nc] = [r, c];", //                          7
  "      while (canRoll(nr + dr, nc + dc))", //               8
  "        { nr += dr; nc += dc; }   // roll to wall", //     9
  "      const key = nr + ',' + nc;", //                     10
  "      if (!seen.has(key)) {", //                          11
  "        seen.add(key); queue.push([nr, nc]);", //         12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return false;", //                                      16
  "}", //                                                    17
];
