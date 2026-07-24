export const CODE = [
  "function rob(nums) {", //                                  0
  "  if (nums.length === 1) return nums[0];", //             1
  "  // houses are in a circle: rob [0..n-2] OR [1..n-1]", // 2
  "  const line = (lo, hi) => {", //                          3
  "    let prev = 0, cur = 0;", //                            4
  "    for (let i = lo; i <= hi; i++) {", //                  5
  "      const take = prev + nums[i];", //                    6
  "      prev = cur;", //                                     7
  "      cur = Math.max(cur, take);   // skip or rob", //     8
  "    }", //                                                 9
  "    return cur;", //                                      10
  "  };", //                                                 11
  "  return Math.max(line(0, nums.length - 2),", //          12
  "                  line(1, nums.length - 1));", //         13
  "}", //                                                    14
];
