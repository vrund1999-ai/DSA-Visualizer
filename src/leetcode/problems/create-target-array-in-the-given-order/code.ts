export const CODE = [
  "function createTargetArray(nums, index) {", //             0
  "  const target = [];", //                                  1
  "  for (let i = 0; i < nums.length; i++) {", //             2
  "    target.splice(index[i], 0, nums[i]);", //              3
  "    //  insert nums[i] at position index[i],", //          4
  "    //  shifting later elements right", //                 5
  "  }", //                                                   6
  "  return target;", //                                      7
  "}", //                                                     8
];
