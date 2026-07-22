export const CODE = [
  "function findDuplicate(nums) {", //                     0
  "  let slow = nums[0], fast = nums[0];", //              1
  "  do {", //                                             2
  "    slow = nums[slow];        // one step", //          3
  "    fast = nums[nums[fast]];  // two steps", //         4
  "  } while (slow !== fast);", //                         5
  "  slow = nums[0];", //                                  6
  "  while (slow !== fast) {", //                          7
  "    slow = nums[slow];", //                             8
  "    fast = nums[fast];", //                             9
  "  }", //                                                10
  "  return slow;   // cycle entrance = duplicate", //     11
  "}", //                                                  12
];
