export const CODE = [
  "function pacificAtlantic(heights) {", //                   0
  "  const R = heights.length, C = heights[0].length;", //    1
  "  const pac = grid(R, C, false), atl = grid(R, C, false);", //2
  "  // flow 'uphill' from each ocean's border inward", //    3
  "  function dfs(r, c, seen) {", //                          4
  "    seen[r][c] = true;", //                                5
  "    for (const [nr, nc] of nbrs(r, c))", //                6
  "      if (!seen[nr][nc] &&", //                            7
  "          heights[nr][nc] >= heights[r][c])", //           8
  "        dfs(nr, nc, seen);", //                            9
  "  }", //                                                  10
  "  for (border cells) dfs into pac or atl;", //            11
  "  // cells reaching BOTH oceans", //                      12
  "  return cellsWhere(pac[r][c] && atl[r][c]);", //         13
  "}", //                                                    14
];
