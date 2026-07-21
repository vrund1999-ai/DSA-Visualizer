export const CODE = [
  "function threeSum(nums) {", //                              0
  "  nums.sort((a, b) => a - b);", //                          1
  "  const res = [];", //                                      2
  "  for (let i = 0; i < nums.length - 2; i++) {", //          3
  "    if (i > 0 && nums[i] === nums[i - 1]) continue;", //    4
  "    let l = i + 1, r = nums.length - 1;", //                5
  "    while (l < r) {", //                                    6
  "      const sum = nums[i] + nums[l] + nums[r];", //         7
  "      if (sum === 0) {", //                                 8
  "        res.push([nums[i], nums[l], nums[r]]);", //         9
  "        l++; r--;", //                                      10
  "      } else if (sum < 0) l++;", //                         11
  "      else r--;", //                                        12
  "    }", //                                                  13
  "  }", //                                                    14
  "  return res;", //                                          15
  "}", //                                                      16
];
