export const CODE = [
  "function minZeroArray(nums, queries) {", //                0
  "  const n = nums.length;", //                              1
  "  const feasible = k => {", //                             2
  "    const diff = Array(n + 1).fill(0);", //                3
  "    for (let i = 0; i < k; i++) {", //                     4
  "      const [l, r, v] = queries[i];", //                   5
  "      diff[l] += v; diff[r + 1] -= v;", //                 6
  "    }", //                                                 7
  "    let avail = 0;", //                                    8
  "    for (let i = 0; i < n; i++) {", //                     9
  "      avail += diff[i];", //                              10
  "      if (avail < nums[i]) return false;", //             11
  "    }", //                                                12
  "    return true;", //                                     13
  "  };", //                                                 14
  "  let lo = 0, hi = queries.length;", //                   15
  "  while (lo < hi) {", //                                  16
  "    const mid = (lo + hi) >> 1;", //                      17
  "    feasible(mid) ? hi = mid : lo = mid + 1;", //         18
  "  }", //                                                  19
  "  return feasible(lo) ? lo : -1;", //                     20
  "}", //                                                    21
];
