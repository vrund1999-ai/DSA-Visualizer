/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const RAT_MAZE_CODE = [
  "function solve(r, c) {", //                                 0
  "  if (oob || wall(r,c) || visited(r,c)) return false;", //  1
  "  visit(r, c); path.push([r, c]);", //                      2
  "  if ((r, c) === end) return true;", //                     3
  "  for (const [nr, nc] of neighbors(r, c))", //              4
  "    if (solve(nr, nc)) return true;", //                    5
  "  path.pop();   // dead end — backtrack", //                6
  "  return false;", //                                        7
  "}", //                                                      8
];
