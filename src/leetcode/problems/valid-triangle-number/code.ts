export const CODE = [
  "function triangleNumber(nums) {", //                            0
  "  nums.sort((a, b) => a - b);", //                             1
  "  let count = 0;", //                                          2
  "  for (let k = nums.length - 1; k >= 2; k--) {", //           3
  "    let l = 0, r = k - 1;", //                                4
  "    while (l < r) {", //                                      5
  "      if (nums[l] + nums[r] > nums[k]) {", //                 6
  "        count += r - l;   // all l..r-1 work", //             7
  "        r--;", //                                             8
  "      } else l++;", //                                        9
  "    }", //                                                    10
  "  }", //                                                      11
  "  return count;", //                                          12
  "}", //                                                        13
];
