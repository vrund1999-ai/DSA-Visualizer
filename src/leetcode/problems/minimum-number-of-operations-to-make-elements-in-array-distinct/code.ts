export const CODE = [
  "function minimumOperations(nums) {", //                    0
  "  const seen = new Set();", //                             1
  "  // scan from the right for the first repeat", //         2
  "  for (let i = nums.length - 1; i >= 0; i--) {", //        3
  "    if (seen.has(nums[i]))", //                            4
  "      return Math.ceil((i + 1) / 3);  // wipe prefix", //  5
  "    seen.add(nums[i]);", //                                6
  "  }", //                                                   7
  "  return 0;   // already all distinct", //                 8
  "}", //                                                     9
];
