export const CODE = [
  "function reverse(x) {", //                             0
  "  const sign = Math.sign(x);", //                      1
  "  let n = Math.abs(x), res = 0;", //                   2
  "  while (n > 0) {", //                                 3
  "    res = res * 10 + (n % 10);", //                    4
  "    n = Math.floor(n / 10);", //                       5
  "  }", //                                               6
  "  if (res > 2**31 - 1) return 0;   // 32-bit overflow",// 7
  "  return sign * res;", //                              8
  "}", //                                                 9
];
