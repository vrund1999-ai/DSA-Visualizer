export const CODE = [
  "function rangeSum(nums, n, left, right) {", //             0
  "  const sums = [];", //                                    1
  "  for (let i = 0; i < n; i++) {", //                       2
  "    let acc = 0;", //                                      3
  "    for (let j = i; j < n; j++) {", //                     4
  "      acc += nums[j];", //                                 5
  "      sums.push(acc);   // subarray sum", //               6
  "    }", //                                                 7
  "  }", //                                                   8
  "  sums.sort((a, b) => a - b);", //                         9
  "  let total = 0;", //                                     10
  "  for (let k = left - 1; k < right; k++)", //             11
  "    total = (total + sums[k]) % MOD;", //                 12
  "  return total;", //                                      13
  "}", //                                                    14
];
