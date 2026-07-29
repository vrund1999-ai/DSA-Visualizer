export const CODE = [
  "function judgeCircle(moves) {", //                         0
  "  let x = 0, y = 0;", //                                   1
  "  for (const m of moves) {", //                            2
  "    if (m === 'U') y++;", //                               3
  "    else if (m === 'D') y--;", //                          4
  "    else if (m === 'R') x++;", //                          5
  "    else x--;   // 'L'", //                                6
  "  }", //                                                   7
  "  return x === 0 && y === 0;", //                          8
  "}", //                                                     9
];
