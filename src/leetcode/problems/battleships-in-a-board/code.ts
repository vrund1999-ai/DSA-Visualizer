export const CODE = [
  "function countBattleships(board) {", //                    0
  "  let count = 0;", //                                      1
  "  for (let r = 0; r < board.length; r++)", //              2
  "    for (let c = 0; c < board[0].length; c++) {", //       3
  "      if (board[r][c] !== 'X') continue;", //              4
  "      if (r > 0 && board[r-1][c] === 'X') continue;", //   5
  "      if (c > 0 && board[r][c-1] === 'X') continue;", //   6
  "      count++;   // top-left cell of a ship", //           7
  "    }", //                                                 8
  "  return count;", //                                       9
  "}", //                                                    10
];
