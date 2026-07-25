export const CODE = [
  "function minSwapsCouples(row) {", //                       0
  "  const pos = [];   // person -> seat", //                 1
  "  row.forEach((p, i) => pos[p] = i);", //                  2
  "  let swaps = 0;", //                                      3
  "  for (let i = 0; i < row.length; i += 2) {", //           4
  "    const partner = row[i] ^ 1;   // couple of row[i]", // 5
  "    if (row[i + 1] === partner) continue;", //             6
  "    const j = pos[partner];       // where partner sits", // 7
  "    swap(row, i + 1, j);          // bring them together", // 8
  "    pos[row[j]] = j; pos[partner] = i + 1;", //            9
  "    swaps++;", //                                          10
  "  }", //                                                  11
  "  return swaps;", //                                      12
  "}", //                                                    13
];
