export const CODE = [
  "function peakIndexInMountainArray(arr) {", //              0
  "  let lo = 0, hi = arr.length - 1;", //                    1
  "  while (lo < hi) {", //                                   2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    if (arr[mid] < arr[mid + 1]) {", //                    4
  "      lo = mid + 1;   // still ascending, peak is right",// 5
  "    } else {", //                                          6
  "      hi = mid;        // descending, peak is here/left",// 7
  "    }", //                                                 8
  "  }", //                                                   9
  "  return lo;   // lo === hi === peak", //                  10
  "}", //                                                     11
];
