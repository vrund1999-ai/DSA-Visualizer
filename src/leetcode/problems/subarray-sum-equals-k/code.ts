export const CODE = [
  "function subarraySum(nums, k) {", //                            0
  "  const seen = new Map([[0, 1]]);", //                         1
  "  let sum = 0, count = 0;", //                                 2
  "  for (const x of nums) {", //                                 3
  "    sum += x;", //                                             4
  "    if (seen.has(sum - k))", //                                5
  "      count += seen.get(sum - k);", //                         6
  "    seen.set(sum, (seen.get(sum) || 0) + 1);", //              7
  "  }", //                                                       8
  "  return count;", //                                           9
  "}", //                                                         10
];
