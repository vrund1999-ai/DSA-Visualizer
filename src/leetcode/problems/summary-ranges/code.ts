export const CODE = [
  "function summaryRanges(nums) {", //                          0
  "  const res = [];", //                                      1
  "  for (let i = 0; i < nums.length; i++) {", //              2
  "    const start = nums[i];", //                             3
  "    while (i + 1 < nums.length &&", //                      4
  "      nums[i + 1] === nums[i] + 1) i++;   // extend", //    5
  "    res.push(start === nums[i]", //                         6
  "      ? `${start}` : `${start}->${nums[i]}`);", //          7
  "  }", //                                                    8
  "  return res;", //                                          9
  "}", //                                                      10
];
