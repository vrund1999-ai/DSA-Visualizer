export const CODE = [
  "function wallsAndGates(rooms) {", //                       0
  "  const queue = [];", //                                   1
  "  // start BFS from every gate at once", //                2
  "  for (let r = 0; r < rooms.length; r++)", //              3
  "    for (let c = 0; c < rooms[0].length; c++)", //         4
  "      if (rooms[r][c] === 0) queue.push([r, c]);", //      5
  "  while (queue.length) {", //                              6
  "    const [r, c] = queue.shift();", //                     7
  "    for (const [nr, nc] of nbrs(r, c)) {", //              8
  "      if (rooms[nr][nc] === INF) {   // empty room", //    9
  "        rooms[nr][nc] = rooms[r][c] + 1;", //             10
  "        queue.push([nr, nc]);", //                        11
  "      }", //                                              12
  "    }", //                                                13
  "  }", //                                                  14
  "}", //                                                    15
];
