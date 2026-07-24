export const CODE = [
  "function rearrangeArray(nums) {", //                       0
  "  const res = new Array(nums.length);", //                 1
  "  let pos = 0, neg = 1;   // even / odd slots", //         2
  "  for (const x of nums) {", //                             3
  "    if (x > 0) { res[pos] = x; pos += 2; }", //            4
  "    else       { res[neg] = x; neg += 2; }", //            5
  "  }", //                                                   6
  "  return res;", //                                         7
  "}", //                                                     8
];
