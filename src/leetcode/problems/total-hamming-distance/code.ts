export const CODE = [
  "function totalHammingDistance(nums) {", //                 0
  "  const n = nums.length;", //                              1
  "  let total = 0;", //                                      2
  "  for (let bit = 0; bit < 32; bit++) {", //                3
  "    let ones = 0;", //                                     4
  "    for (const x of nums)", //                             5
  "      ones += (x >> bit) & 1;   // count 1s", //           6
  "    // each 1 pairs with each 0 at this bit", //           7
  "    total += ones * (n - ones);", //                       8
  "  }", //                                                   9
  "  return total;", //                                      10
  "}", //                                                    11
];
