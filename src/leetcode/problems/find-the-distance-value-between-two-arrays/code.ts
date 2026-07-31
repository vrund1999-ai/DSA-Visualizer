export const CODE = [
  "function findTheDistanceValue(arr1, arr2, d) {", //        0
  "  let count = 0;", //                                       1
  "  for (const a of arr1) {", //                             2
  "    // valid if NO element of arr2 is within d", //        3
  "    const ok = arr2.every(b => Math.abs(a - b) > d);", //  4
  "    if (ok) count++;", //                                  5
  "  }", //                                                   6
  "  return count;", //                                       7
  "}", //                                                     8
];
