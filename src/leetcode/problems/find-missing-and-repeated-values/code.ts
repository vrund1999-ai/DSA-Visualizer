export const CODE = [
  "function findMissingAndRepeatedValues(grid) {", //         0
  "  const n = grid.length;", //                              1
  "  const seen = new Array(n * n + 1).fill(0);", //          2
  "  for (const row of grid)", //                             3
  "    for (const v of row) seen[v]++;", //                   4
  "  let repeated = -1, missing = -1;", //                    5
  "  for (let v = 1; v <= n * n; v++) {", //                  6
  "    if (seen[v] === 2) repeated = v;", //                  7
  "    if (seen[v] === 0) missing = v;", //                   8
  "  }", //                                                   9
  "  return [repeated, missing];", //                         10
  "}", //                                                     11
];
