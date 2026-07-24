export const CODE = [
  "function isValidSudoku(board) {", //                              0
  "  const seen = new Set();", //                                   1
  "  for (let r = 0; r < 9; r++)", //                              2
  "    for (let c = 0; c < 9; c++) {", //                          3
  "      const v = board[r][c];", //                               4
  "      if (v === '.') continue;", //                             5
  "      const box = `${(r/3)|0},${(c/3)|0}`;", //                 6
  "      const keys = [`r${r}:${v}`,`c${c}:${v}`,`b${box}:${v}`];",// 7
  "      for (const k of keys)", //                                8
  "        if (seen.has(k)) return false;   // conflict", //       9
  "        else seen.add(k);", //                                  10
  "    }", //                                                      11
  "  return true;", //                                             12
  "}", //                                                          13
];
