export const CODE = [
  "function shortestSubarray(nums, k) {", //                  0
  "  const n = nums.length, prefix = [0];", //                1
  "  for (const x of nums)", //                               2
  "    prefix.push(prefix.at(-1) + x);", //                   3
  "  let best = Infinity;", //                                4
  "  const dq = [];   // indices, prefix increasing", //      5
  "  for (let j = 0; j <= n; j++) {", //                      6
  "    while (dq.length &&", //                               7
  "        prefix[j] - prefix[dq[0]] >= k) {", //             8
  "      best = Math.min(best, j - dq.shift());", //          9
  "    }", //                                                10
  "    while (dq.length &&", //                              11
  "        prefix[dq.at(-1)] >= prefix[j])", //              12
  "      dq.pop();", //                                       13
  "    dq.push(j);", //                                      14
  "  }", //                                                  15
  "  return best === Infinity ? -1 : best;", //              16
  "}", //                                                    17
];
