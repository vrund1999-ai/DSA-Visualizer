export const CODE = [
  "function solveSudoku(board) {", //                         0
  "  const solve = () => {", //                               1
  "    for (let r = 0; r < 9; r++)", //                       2
  "      for (let c = 0; c < 9; c++) {", //                   3
  "        if (board[r][c] !== 0) continue;", //              4
  "        for (let d = 1; d <= 9; d++) {", //                5
  "          if (isValid(board, r, c, d)) {", //              6
  "            board[r][c] = d;      // place", //            7
  "            if (solve()) return true;", //                 8
  "            board[r][c] = 0;      // backtrack", //        9
  "          }", //                                          10
  "        }", //                                            11
  "        return false;   // no digit fits here", //        12
  "      }", //                                              13
  "    return true;        // board full", //                14
  "  };", //                                                 15
  "  solve();", //                                           16
  "}", //                                                    17
];
