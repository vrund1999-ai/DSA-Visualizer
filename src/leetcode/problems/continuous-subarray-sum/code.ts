export const CODE = [
  "function checkSubarraySum(nums, k) {", //                  0
  "  const first = new Map([[0, -1]]);  // rem -> index", //  1
  "  let sum = 0;", //                                        2
  "  for (let i = 0; i < nums.length; i++) {", //             3
  "    sum += nums[i];", //                                   4
  "    const r = ((sum % k) + k) % k;", //                    5
  "    if (first.has(r)) {", //                               6
  "      if (i - first.get(r) >= 2) return true;", //         7
  "    } else first.set(r, i);   // remember earliest", //    8
  "  }", //                                                   9
  "  return false;", //                                      10
  "}", //                                                    11
];
