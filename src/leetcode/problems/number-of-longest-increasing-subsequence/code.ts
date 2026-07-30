export const CODE = [
  "function findNumberOfLIS(nums) {", //                      0
  "  const n = nums.length;", //                              1
  "  const len = Array(n).fill(1);", //                       2
  "  const cnt = Array(n).fill(1);", //                       3
  "  for (let i = 0; i < n; i++)", //                         4
  "    for (let j = 0; j < i; j++)", //                       5
  "      if (nums[j] < nums[i]) {", //                        6
  "        if (len[j] + 1 > len[i]) {", //                    7
  "          len[i] = len[j] + 1;", //                        8
  "          cnt[i] = cnt[j];   // fresh longer chain", //    9
  "        } else if (len[j] + 1 === len[i])", //            10
  "          cnt[i] += cnt[j];   // another way", //         11
  "      }", //                                              12
  "  const max = Math.max(...len);", //                      13
  "  return sumWhere(cnt, len, max);", //                    14
  "}", //                                                    15
];
