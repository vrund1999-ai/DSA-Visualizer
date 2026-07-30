export const CODE = [
  "function divideArray(nums, k) {", //                       0
  "  nums.sort((a, b) => a - b);", //                         1
  "  const res = [];", //                                     2
  "  for (let i = 0; i < nums.length; i += 3) {", //          3
  "    if (nums[i + 2] - nums[i] > k)", //                    4
  "      return [];   // spread too large", //                5
  "    res.push([nums[i], nums[i + 1], nums[i + 2]]);", //    6
  "  }", //                                                   7
  "  return res;", //                                         8
  "}", //                                                     9
];
