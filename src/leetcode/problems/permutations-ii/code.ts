export const CODE = [
  "function permuteUnique(nums) {", //                        0
  "  nums.sort((a, b) => a - b);", //                         1
  "  const res = [], used = [], path = [];", //               2
  "  (function backtrack() {", //                             3
  "    if (path.length === nums.length) {", //                4
  "      res.push([...path]); return;", //                    5
  "    }", //                                                 6
  "    for (let i = 0; i < nums.length; i++) {", //           7
  "      if (used[i]) continue;", //                          8
  "      if (i > 0 && nums[i] === nums[i-1] && !used[i-1])",//9
  "        continue;   // skip duplicate branch", //         10
  "      used[i] = true; path.push(nums[i]);", //            11
  "      backtrack();", //                                    12
  "      used[i] = false; path.pop();", //                   13
  "    }", //                                                14
  "  })();", //                                               15
  "  return res;", //                                        16
  "}", //                                                    17
];
