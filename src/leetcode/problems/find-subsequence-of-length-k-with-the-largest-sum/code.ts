export const CODE = [
  "function maxSubsequence(nums, k) {", //                    0
  "  const idx = nums.map((_, i) => i)", //                   1
  "    .sort((a, b) => nums[b] - nums[a]);   // by value", // 2
  "  const keep = new Set(idx.slice(0, k));   // top k", //   3
  "  const res = [];", //                                     4
  "  for (let i = 0; i < nums.length; i++)", //               5
  "    if (keep.has(i)) res.push(nums[i]);   // keep order", // 6
  "  return res;", //                                         7
  "}", //                                                     8
];
