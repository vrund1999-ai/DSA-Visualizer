export const CODE = [
  "function findDisappeared(nums) {", //                          0
  "  for (const x of nums) {", //                                1
  "    const i = Math.abs(x) - 1;", //                           2
  "    if (nums[i] > 0) nums[i] *= -1;   // mark seen", //       3
  "  }", //                                                      4
  "  const res = [];", //                                        5
  "  for (let i = 0; i < nums.length; i++)", //                  6
  "    if (nums[i] > 0) res.push(i + 1);  // never marked", //   7
  "  return res;", //                                            8
  "}", //                                                        9
];
