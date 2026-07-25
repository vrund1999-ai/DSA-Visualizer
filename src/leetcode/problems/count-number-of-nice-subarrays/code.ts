export const CODE = [
  "function numberOfSubarrays(nums, k) {", //                 0
  "  const count = new Map([[0, 1]]);   // oddPrefix -> freq", // 1
  "  let odd = 0, result = 0;", //                            2
  "  for (const n of nums) {", //                             3
  "    odd += n & 1;   // parity prefix", //                  4
  "    result += count.get(odd - k) ?? 0;", //                5
  "    count.set(odd, (count.get(odd) ?? 0) + 1);", //        6
  "  }", //                                                   7
  "  return result;", //                                      8
  "}", //                                                     9
];
