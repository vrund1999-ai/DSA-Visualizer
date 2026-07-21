/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const TWO_SUM_CODE = [
  "function twoSum(nums, target) {", //          0
  "  const seen = new Map();", //                1
  "  for (let i = 0; i < nums.length; i++) {", //2
  "    const complement = target - nums[i];", // 3
  "    if (seen.has(complement)) {", //          4
  "      return [seen.get(complement), i];", //  5
  "    }", //                                    6
  "    seen.set(nums[i], i);", //                7
  "  }", //                                      8
  "  return [];", //                             9
  "}", //                                        10
];
