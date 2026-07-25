export const CODE = [
  "function findDuplicates(nums) {", //                       0
  "  const res = [];", //                                     1
  "  for (const n of nums) {", //                             2
  "    const i = Math.abs(n) - 1;", //                        3
  "    if (nums[i] < 0)", //                                  4
  "      res.push(i + 1);   // seen before", //               5
  "    else", //                                              6
  "      nums[i] = -nums[i]; // mark value i+1 as seen", //   7
  "  }", //                                                   8
  "  return res;", //                                         9
  "}", //                                                    10
];
