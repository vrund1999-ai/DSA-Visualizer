export const CODE = [
  "function pivotArray(nums, pivot) {", //                    0
  "  const less = [], equal = [], greater = [];", //          1
  "  for (const x of nums) {", //                             2
  "    if (x < pivot) less.push(x);", //                      3
  "    else if (x === pivot) equal.push(x);", //              4
  "    else greater.push(x);", //                             5
  "  }", //                                                   6
  "  return [...less, ...equal, ...greater];", //             7
  "}", //                                                     8
];
