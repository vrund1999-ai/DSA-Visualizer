export const CODE = [
  "function maxSlidingWindow(nums, k) {", //                          0
  "  const res = [], dq = [];   // indices, decreasing values", //   1
  "  for (let i = 0; i < nums.length; i++) {", //                    2
  "    if (dq.length && dq[0] <= i - k) dq.shift();  // expire", //  3
  "    while (dq.length &&", //                                      4
  "        nums[dq.at(-1)] < nums[i]) dq.pop();      // shrink", //  5
  "    dq.push(i);", //                                              6
  "    if (i >= k - 1) res.push(nums[dq[0]]);        // record", //  7
  "  }", //                                                          8
  "  return res;", //                                                9
  "}", //                                                            10
];
