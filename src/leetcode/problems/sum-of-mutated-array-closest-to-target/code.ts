export const CODE = [
  "function findBestValue(arr, target) {", //                 0
  "  const capSum = t =>", //                                 1
  "    arr.reduce((s, x) => s + Math.min(x, t), 0);", //      2
  "  let lo = 0, hi = Math.max(...arr);", //                  3
  "  while (lo < hi) {   // smallest t with sum >= target", //4
  "    const mid = (lo + hi) >> 1;", //                       5
  "    if (capSum(mid) < target) lo = mid + 1;", //           6
  "    else hi = mid;", //                                    7
  "  }", //                                                   8
  "  // compare the crossover value with one below", //       9
  "  return Math.abs(capSum(lo) - target) <", //             10
  "         Math.abs(capSum(lo - 1) - target)", //           11
  "    ? lo : lo - 1;", //                                   12
  "}", //                                                    13
];
