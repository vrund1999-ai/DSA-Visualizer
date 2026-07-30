export const CODE = [
  "function maximumUnits(boxTypes, truckSize) {", //          0
  "  boxTypes.sort((a, b) => b[1] - a[1]);   // units desc", //1
  "  let units = 0;", //                                      2
  "  for (const [count, perBox] of boxTypes) {", //           3
  "    if (truckSize === 0) break;", //                       4
  "    const take = Math.min(count, truckSize);", //          5
  "    units += take * perBox;", //                           6
  "    truckSize -= take;", //                                7
  "  }", //                                                   8
  "  return units;", //                                       9
  "}", //                                                    10
];
