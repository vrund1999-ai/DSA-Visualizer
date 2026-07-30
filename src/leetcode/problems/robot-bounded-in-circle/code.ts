export const CODE = [
  "function isRobotBounded(instructions) {", //               0
  "  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];   // NESW", // 1
  "  let x = 0, y = 0, d = 0;", //                            2
  "  for (const ch of instructions) {", //                    3
  "    if (ch === 'G') {", //                                 4
  "      x += dirs[d][0]; y += dirs[d][1];", //               5
  "    } else if (ch === 'L') {", //                          6
  "      d = (d + 3) % 4;   // turn left", //                 7
  "    } else {", //                                          8
  "      d = (d + 1) % 4;   // turn right", //                9
  "    }", //                                                10
  "  }", //                                                  11
  "  // bounded if back at origin or not facing north", //   12
  "  return (x === 0 && y === 0) || d !== 0;", //            13
  "}", //                                                    14
];
