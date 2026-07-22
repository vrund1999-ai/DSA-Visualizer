export const CODE = [
  "function subsetsWithDup(nums) {", //                          0
  "  nums.sort((a, b) => a - b);", //                            1
  "  const res = [];", //                                        2
  "  function bt(start, cur) {", //                              3
  "    res.push([...cur]);", //                                  4
  "    for (let i = start; i < nums.length; i++) {", //          5
  "      if (i > start && nums[i] === nums[i-1]) continue;", //  6
  "      cur.push(nums[i]);", //                                 7
  "      bt(i + 1, cur);", //                                    8
  "      cur.pop();", //                                         9
  "    }", //                                                    10
  "  }", //                                                      11
  "  bt(0, []);", //                                             12
  "  return res;", //                                            13
  "}", //                                                        14
];
