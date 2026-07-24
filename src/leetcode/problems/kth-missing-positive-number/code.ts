export const CODE = [
  "function findKthPositive(arr, k) {", //                    0
  "  let lo = 0, hi = arr.length;", //                        1
  "  while (lo < hi) {", //                                   2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    // missing before index mid = arr[mid] - (mid + 1)", //4
  "    if (arr[mid] - (mid + 1) < k) lo = mid + 1;", //       5
  "    else hi = mid;", //                                    6
  "  }", //                                                   7
  "  return lo + k;   // k-th missing positive", //          8
  "}", //                                                     9
];
