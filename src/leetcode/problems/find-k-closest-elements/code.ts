export const CODE = [
  "function findClosestElements(arr, k, x) {", //             0
  "  let lo = 0, hi = arr.length - 1;", //                    1
  "  while (hi - lo >= k) {", //                              2
  "    if (x - arr[lo] > arr[hi] - x)", //                    3
  "      lo++;   // left end is farther from x", //           4
  "    else", //                                              5
  "      hi--;   // right end is farther (ties: drop right)", // 6
  "  }", //                                                   7
  "  return arr.slice(lo, lo + k);", //                       8
  "}", //                                                     9
];
