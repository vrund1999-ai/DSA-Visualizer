export const CODE = [
  "function containVirus(grid) {", //                         0
  "  let walls = 0;", //                                      1
  "  while (true) {", //                                      2
  "    const regions = findRegions(grid);  // of 1-cells", // 3
  "    if (regions.every(r => r.threat.size === 0)) break;", //4
  "    // quarantine the region threatening the most cells", //5
  "    regions.sort((a, b) => b.threat.size - a.threat.size);",//6
  "    const worst = regions[0];", //                         7
  "    walls += worst.wallCount;", //                         8
  "    worst.cells.forEach(c => grid[c] = 2);  // sealed", // 9
  "    for (const r of regions.slice(1))", //                10
  "      r.threat.forEach(c => grid[c] = 1);   // spread", // 11
  "  }", //                                                  12
  "  return walls;", //                                      13
  "}", //                                                    14
];
