export const CODE = [
  "function subarraysDivByK(nums, k) {", //                   0
  "  const count = new Array(k).fill(0);", //                 1
  "  count[0] = 1;   // empty prefix", //                     2
  "  let sum = 0, ans = 0;", //                               3
  "  for (const x of nums) {", //                             4
  "    sum += x;", //                                         5
  "    const r = ((sum % k) + k) % k;   // 0..k-1", //        6
  "    ans += count[r];   // same remainder seen before", //  7
  "    count[r]++;", //                                       8
  "  }", //                                                   9
  "  return ans;", //                                        10
  "}", //                                                    11
];
