export const CODE = [
  "function maximumTripletValue(nums) {", //                  0
  "  let ans = 0;", //                                        1
  "  let maxI = 0;        // best nums[i]", //                2
  "  let maxDiff = 0;     // best nums[i] - nums[j]", //      3
  "  for (const num of nums) {   // num plays k", //          4
  "    ans = Math.max(ans, maxDiff * num);", //               5
  "    maxDiff = Math.max(maxDiff, maxI - num);", //          6
  "    maxI = Math.max(maxI, num);", //                       7
  "  }", //                                                   8
  "  return ans;   // 0 if all triplets negative", //         9
  "}", //                                                    10
];
