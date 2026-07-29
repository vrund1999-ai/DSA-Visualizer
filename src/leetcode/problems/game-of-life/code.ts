export const CODE = [
  "function gameOfLife(board) {", //                          0
  "  const m = board.length, n = board[0].length;", //        1
  "  const next = grid(m, n, 0);", //                         2
  "  for (let r = 0; r < m; r++)", //                         3
  "    for (let c = 0; c < n; c++) {", //                     4
  "      const live = countLiveNeighbors(board, r, c);", //   5
  "      if (board[r][c] === 1)", //                          6
  "        next[r][c] = live === 2 || live === 3 ? 1 : 0;", // 7
  "      else", //                                            8
  "        next[r][c] = live === 3 ? 1 : 0;   // birth", //   9
  "    }", //                                                10
  "  return next;", //                                       11
  "}", //                                                    12
];
