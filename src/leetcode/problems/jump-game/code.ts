export const CODE = [
  "function canJump(nums) {", //                       0
  "  let reach = 0;", //                               1
  "  for (let i = 0; i < nums.length; i++) {", //      2
  "    if (i > reach) return false;", //               3
  "    reach = Math.max(reach, i + nums[i]);", //      4
  "  }", //                                            5
  "  return true;", //                                 6
  "}", //                                              7
];
