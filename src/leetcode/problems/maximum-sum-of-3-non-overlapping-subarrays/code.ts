export const CODE = [
  "function maxSumOfThree(nums, k) {", //                     0
  "  const W = windowSums(nums, k);   // sum per start", //   1
  "  const left = bestFromLeft(W);", //                       2
  "  const right = bestFromRight(W);", //                     3
  "  let best = -1, ans = [];", //                            4
  "  for (let m = k; m + k < W.length + k - 1; m++) {", //    5
  "    const l = left[m - k], r = right[m + k];", //          6
  "    const total = W[l] + W[m] + W[r];", //                 7
  "    if (total > best) {", //                               8
  "      best = total;", //                                   9
  "      ans = [l, m, r];   // fix middle, best sides", //   10
  "    }", //                                                11
  "  }", //                                                  12
  "  return ans;", //                                        13
  "}", //                                                    14
];
