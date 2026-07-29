export const CODE = [
  "function largestAltitude(gain) {", //                      0
  "  let altitude = 0, highest = 0;", //                      1
  "  for (const g of gain) {", //                             2
  "    altitude += g;   // net gain so far", //               3
  "    highest = Math.max(highest, altitude);", //            4
  "  }", //                                                   5
  "  return highest;", //                                     6
  "}", //                                                     7
];
