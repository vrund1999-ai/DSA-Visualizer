export const CODE = [
  "function longestSubsequence(s, k) {", //                   0
  "  let ans = 0, val = 0, pow = 1;", //                      1
  "  for (let i = s.length - 1; i >= 0; i--) {", //           2
  "    if (s[i] === '0') {", //                               3
  "      ans++;   // zeros are always free", //               4
  "    } else if (pow <= k && val + pow <= k) {", //          5
  "      val += pow;   // include this 1", //                 6
  "      ans++;", //                                          7
  "    }", //                                                 8
  "    if (pow <= k) pow *= 2;   // next place value", //     9
  "  }", //                                                  10
  "  return ans;", //                                        11
  "}", //                                                    12
];
