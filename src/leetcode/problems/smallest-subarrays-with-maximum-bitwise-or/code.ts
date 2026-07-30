export const CODE = [
  "function smallestSubarrays(nums) {", //                    0
  "  const n = nums.length, ans = Array(n).fill(1);", //      1
  "  const last = {};   // bit -> nearest index >= i", //     2
  "  for (let i = n - 1; i >= 0; i--) {", //                  3
  "    for (let b = 0; b < 30; b++)", //                      4
  "      if (nums[i] & (1 << b)) last[b] = i;", //            5
  "    let end = i;", //                                      6
  "    for (let b = 0; b < 30; b++)", //                      7
  "      if (last[b] !== undefined)", //                      8
  "        end = Math.max(end, last[b]);", //                 9
  "    ans[i] = end - i + 1;   // reach every bit", //       10
  "  }", //                                                  11
  "  return ans;", //                                        12
  "}", //                                                    13
];
