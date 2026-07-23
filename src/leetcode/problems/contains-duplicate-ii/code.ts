export const CODE = [
  "function containsNearbyDuplicate(nums, k) {", //                 0
  "  const last = new Map();", //                                  1
  "  for (let i = 0; i < nums.length; i++) {", //                 2
  "    if (last.has(nums[i]) &&", //                              3
  "        i - last.get(nums[i]) <= k) return true;", //          4
  "    last.set(nums[i], i);   // remember latest index", //      5
  "  }", //                                                       6
  "  return false;", //                                           7
  "}", //                                                         8
];
