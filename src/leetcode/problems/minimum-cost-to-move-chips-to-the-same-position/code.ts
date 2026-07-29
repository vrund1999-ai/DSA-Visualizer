export const CODE = [
  "function minCostToMoveChips(position) {", //               0
  "  let even = 0, odd = 0;", //                              1
  "  for (const p of position) {", //                        2
  "    if (p % 2 === 0) even++;   // moving by 2 is free", // 3
  "    else odd++;", //                                       4
  "  }", //                                                   5
  "  return Math.min(even, odd);   // move the smaller group", // 6
  "}", //                                                     7
];
