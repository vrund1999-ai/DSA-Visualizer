export const CODE = [
  "function reversePairs(nums) {", //                         0
  "  const sort = (lo, hi) => {", //                          1
  "    if (lo >= hi) return 0;", //                           2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    let count = sort(lo, mid) + sort(mid + 1, hi);", //    4
  "    let j = mid + 1;", //                                  5
  "    for (let i = lo; i <= mid; i++) {", //                 6
  "      while (j <= hi && nums[i] > 2 * nums[j]) j++;", //   7
  "      count += j - (mid + 1);   // pairs for this i", //   8
  "    }", //                                                 9
  "    merge(lo, mid, hi);   // sort the two halves", //     10
  "    return count;", //                                    11
  "  };", //                                                 12
  "  return sort(0, nums.length - 1);", //                   13
  "}", //                                                    14
];
