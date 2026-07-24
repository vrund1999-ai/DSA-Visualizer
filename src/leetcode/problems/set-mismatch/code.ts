export const CODE = [
  "function findErrorNums(nums) {", //                            0
  "  const seen = new Set();", //                                1
  "  let dup = -1, sum = 0;", //                                 2
  "  for (const x of nums) {", //                                3
  "    if (seen.has(x)) dup = x;   // repeated", //              4
  "    seen.add(x); sum += x;", //                               5
  "  }", //                                                      6
  "  const n = nums.length;", //                                 7
  "  const expected = n * (n + 1) / 2;", //                      8
  "  const missing = expected - (sum - dup);", //               9
  "  return [dup, missing];", //                                 10
  "}", //                                                        11
];
