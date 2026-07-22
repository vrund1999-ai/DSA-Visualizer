export const CODE = [
  "function missingNumber(nums) {", //                    0
  "  const n = nums.length;", //                          1
  "  let acc = n;               // start with n", //      2
  "  for (let i = 0; i < n; i++)", //                     3
  "    acc ^= i ^ nums[i];      // XOR index and value",//4
  "  return acc;", //                                     5
  "}", //                                                 6
];
