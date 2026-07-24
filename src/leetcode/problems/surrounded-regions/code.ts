export const CODE = [
  "function solve(board) {", //                               0
  "  const m = board.length, n = board[0].length;", //       1
  "  const dfs = (r, c) => {", //                             2
  "    if (r<0||c<0||r>=m||c>=n||board[r][c]!=='O') return;",//3
  "    board[r][c] = 'S';   // safe — touches border", //    4
  "    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);", //  5
  "  };", //                                                  6
  "  for (let r=0;r<m;r++) { dfs(r,0); dfs(r,n-1); }", //    7
  "  for (let c=0;c<n;c++) { dfs(0,c); dfs(m-1,c); }", //    8
  "  for (let r=0;r<m;r++)", //                               9
  "    for (let c=0;c<n;c++)", //                            10
  "      board[r][c] = board[r][c]==='S' ? 'O' : 'X';", //   11
  "}", //                                                    12
];
