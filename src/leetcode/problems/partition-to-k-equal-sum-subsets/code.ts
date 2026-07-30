export const CODE = [
  "function canPartitionKSubsets(nums, k) {", //              0
  "  const total = sum(nums);", //                            1
  "  if (total % k) return false;", //                        2
  "  const target = total / k;", //                           3
  "  nums.sort((a, b) => b - a);   // big first", //          4
  "  const buckets = Array(k).fill(0);", //                   5
  "  function bt(i) {", //                                    6
  "    if (i === nums.length) return true;", //               7
  "    for (let j = 0; j < k; j++) {", //                     8
  "      if (buckets[j] + nums[i] <= target) {", //           9
  "        buckets[j] += nums[i];", //                       10
  "        if (bt(i + 1)) return true;", //                  11
  "        buckets[j] -= nums[i];   // undo", //             12
  "      }", //                                              13
  "      if (buckets[j] === 0) break;   // skip dups", //    14
  "    }", //                                                15
  "    return false;", //                                    16
  "  }", //                                                  17
  "  return bt(0);", //                                      18
  "}", //                                                    19
];
