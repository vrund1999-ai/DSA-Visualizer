export const CODE = [
  "function jump(nums) {", //                                  0
  "  let jumps = 0, curEnd = 0, farthest = 0;", //            1
  "  for (let i = 0; i < nums.length - 1; i++) {", //         2
  "    farthest = Math.max(farthest, i + nums[i]);", //       3
  "    if (i === curEnd) {          // must jump now", //     4
  "      jumps++; curEnd = farthest;", //                     5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return jumps;", //                                       8
  "}", //                                                     9
];
