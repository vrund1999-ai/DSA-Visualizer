export const CODE = [
  "function fourSum(nums, target) {", //                            0
  "  nums.sort((a, b) => a - b);", //                              1
  "  const res = [], n = nums.length;", //                        2
  "  for (let i = 0; i < n - 3; i++) {", //                       3
  "    if (i > 0 && nums[i] === nums[i-1]) continue;", //         4
  "    for (let j = i + 1; j < n - 2; j++) {", //                 5
  "      let l = j + 1, r = n - 1;", //                           6
  "      while (l < r) {", //                                     7
  "        const s = nums[i]+nums[j]+nums[l]+nums[r];", //        8
  "        if (s === target) { res.push([i,j,l,r]); l++; r--; }",// 9
  "        else if (s < target) l++; else r--;", //               10
  "      }", //                                                   11
  "    }", //                                                     12
  "  }", //                                                       13
  "  return res;", //                                             14
  "}", //                                                         15
];
