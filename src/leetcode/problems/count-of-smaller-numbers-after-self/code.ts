export const CODE = [
  "function countSmaller(nums) {", //                         0
  "  const res = new Array(nums.length).fill(0);", //         1
  "  for (let i = 0; i < nums.length; i++) {", //             2
  "    for (let j = i + 1; j < nums.length; j++) {", //       3
  "      if (nums[j] < nums[i]) res[i]++;   // smaller right",//4
  "    }", //                                                 5
  "  }", //                                                   6
  "  return res;", //                                         7
  "}", //                                                     8
  "// O(n log n) via merge sort or a BIT for large inputs", //9
];
