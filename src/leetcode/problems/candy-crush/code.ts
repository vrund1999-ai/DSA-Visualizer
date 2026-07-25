export const CODE = [
  "function candyCrush(board) {", //                          0
  "  const R = board.length, C = board[0].length;", //        1
  "  let crushed = true;", //                                 2
  "  while (crushed) {", //                                   3
  "    const mark = new Set();", //                           4
  "    scanRows(mark); scanCols(mark);   // find 3+ runs", // 5
  "    crushed = mark.size > 0;", //                          6
  "    for (const [r, c] of mark) board[r][c] = 0;  // crush", // 7
  "    for (let c = 0; c < C; c++) applyGravity(c);", //      8
  "  }", //                                                   9
  "  return board;", //                                      10
  "}", //                                                    11
];
