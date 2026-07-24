export const CODE = [
  "function findMaxLength(nums) {", //                        0
  "  const first = new Map([[0, -1]]);  // sum -> index", //  1
  "  let sum = 0, best = 0;", //                              2
  "  for (let i = 0; i < nums.length; i++) {", //             3
  "    sum += nums[i] === 1 ? 1 : -1;   // 0 counts as -1",// 4
  "    if (first.has(sum))", //                               5
  "      best = Math.max(best, i - first.get(sum));", //      6
  "    else first.set(sum, i);   // remember earliest", //    7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
];
