export const CODE = [
  "function sortedSquares(nums) {", //                        0
  "  const res = new Array(nums.length);", //                1
  "  let l = 0, r = nums.length - 1;", //                    2
  "  for (let k = nums.length - 1; k >= 0; k--) {", //       3
  "    if (Math.abs(nums[l]) > Math.abs(nums[r]))", //       4
  "      res[k] = nums[l] * nums[l++];", //                  5
  "    else", //                                             6
  "      res[k] = nums[r] * nums[r--];", //                  7
  "  }", //                                                  8
  "  return res;", //                                        9
  "}", //                                                    10
];
