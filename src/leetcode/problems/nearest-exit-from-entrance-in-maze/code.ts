export const CODE = [
  "function nearestExit(maze, entrance) {", //                0
  "  const [er, ec] = entrance;", //                          1
  "  const queue = [[er, ec]];", //                           2
  "  maze[er][ec] = '+';   // mark visited", //               3
  "  let steps = 0;", //                                      4
  "  while (queue.length) {", //                              5
  "    steps++;", //                                          6
  "    const next = [];", //                                  7
  "    for (const [r, c] of queue)", //                       8
  "      for (const [nr, nc] of nbrs(r, c)) {", //            9
  "        if (maze[nr][nc] !== '.') continue;", //          10
  "        if (isBorder(nr, nc)) return steps;   // exit", // 11
  "        maze[nr][nc] = '+';", //                          12
  "        next.push([nr, nc]);", //                         13
  "      }", //                                              14
  "    queue = next;", //                                    15
  "  }", //                                                  16
  "  return -1;   // no exit", //                            17
  "}", //                                                    18
];
