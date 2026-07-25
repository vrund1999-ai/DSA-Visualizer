export const CODE = [
  "function getPermutation(n, k) {", //                       0
  "  const fact = [1];", //                                   1
  "  for (let i = 1; i <= n; i++) fact[i] = fact[i-1]*i;", // 2
  "  const nums = [1..n];", //                                3
  "  k--;   // 0-indexed", //                                 4
  "  let res = '';", //                                       5
  "  for (let i = n; i >= 1; i--) {", //                      6
  "    const idx = Math.floor(k / fact[i-1]);", //            7
  "    res += nums[idx];", //                                 8
  "    nums.splice(idx, 1);   // remove used", //             9
  "    k %= fact[i-1];", //                                  10
  "  }", //                                                  11
  "  return res;", //                                        12
  "}", //                                                    13
];
