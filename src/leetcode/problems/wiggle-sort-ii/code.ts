export const CODE = [
  "function wiggleSort(nums) {", //                           0
  "  const s = [...nums].sort((a, b) => a - b);", //          1
  "  const n = nums.length;", //                              2
  "  const mid = Math.floor((n + 1) / 2);", //                3
  "  let j = mid - 1;   // top of the small half", //         4
  "  for (let i = 0; i < n; i += 2)   // even slots", //      5
  "    nums[i] = s[j--];", //                                 6
  "  let k = n - 1;      // top of the large half", //        7
  "  for (let i = 1; i < n; i += 2)   // odd slots", //       8
  "    nums[i] = s[k--];", //                                 9
  "  return nums;", //                                       10
  "}", //                                                    11
];
