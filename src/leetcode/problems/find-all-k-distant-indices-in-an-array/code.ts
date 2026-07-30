export const CODE = [
  "function findKDistantIndices(nums, key, k) {", //          0
  "  const result = new Set();", //                           1
  "  for (let j = 0; j < nums.length; j++) {", //             2
  "    if (nums[j] === key) {", //                            3
  "      const lo = Math.max(0, j - k);", //                  4
  "      const hi = Math.min(nums.length - 1, j + k);", //    5
  "      for (let i = lo; i <= hi; i++) result.add(i);", //   6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return [...result].sort((a, b) => a - b);", //           9
  "}", //                                                    10
];
