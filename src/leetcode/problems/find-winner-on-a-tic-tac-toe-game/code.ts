export const CODE = [
  "function tictactoe(moves) {", //                           0
  "  const grid = [[0,0,0],[0,0,0],[0,0,0]];", //             1
  "  for (let t = 0; t < moves.length; t++) {", //            2
  "    const [r, c] = moves[t];", //                          3
  "    grid[r][c] = t % 2 === 0 ? 1 : 2;   // A=1, B=2", //    4
  "    if (wins(grid, grid[r][c]))", //                       5
  "      return t % 2 === 0 ? 'A' : 'B';", //                 6
  "  }", //                                                   7
  "  return moves.length === 9 ? 'Draw' : 'Pending';", //     8
  "}", //                                                     9
];
