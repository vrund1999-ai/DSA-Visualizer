export const CODE = [
  "function exist(board, word) {", //                            0
  "  const R = board.length, C = board[0].length;", //          1
  "  function dfs(r, c, k) {", //                               2
  "    if (k === word.length) return true;", //                 3
  "    if (r < 0 || r >= R || c < 0 || c >= C) return false;", //4
  "    if (board[r][c] !== word[k]) return false;", //          5
  "    const tmp = board[r][c];", //                            6
  "    board[r][c] = '#';        // mark visited", //           7
  "    const found = dfs(r+1,c,k+1) || dfs(r-1,c,k+1)", //      8
  "               || dfs(r,c+1,k+1) || dfs(r,c-1,k+1);", //     9
  "    board[r][c] = tmp;        // backtrack", //              10
  "    return found;", //                                       11
  "  }", //                                                     12
  "  for (let r = 0; r < R; r++)", //                           13
  "    for (let c = 0; c < C; c++)", //                         14
  "      if (dfs(r, c, 0)) return true;", //                    15
  "  return false;", //                                         16
  "}", //                                                       17
];
