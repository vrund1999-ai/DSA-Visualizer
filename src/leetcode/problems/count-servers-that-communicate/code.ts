export const CODE = [
  "function countServers(grid) {", //                         0
  "  const m = grid.length, n = grid[0].length;", //          1
  "  const rows = Array(m).fill(0), cols = Array(n).fill(0);", // 2
  "  for (let r = 0; r < m; r++)", //                         3
  "    for (let c = 0; c < n; c++)", //                       4
  "      if (grid[r][c]) { rows[r]++; cols[c]++; }", //       5
  "  let count = 0;", //                                      6
  "  for (let r = 0; r < m; r++)", //                         7
  "    for (let c = 0; c < n; c++)", //                       8
  "      if (grid[r][c] && (rows[r] > 1 || cols[c] > 1))", // 9
  "        count++;   // shares a row or column", //         10
  "  return count;", //                                      11
  "}", //                                                    12
];
