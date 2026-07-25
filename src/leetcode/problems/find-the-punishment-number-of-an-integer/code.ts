export const CODE = [
  "function punishmentNumber(n) {", //                        0
  "  let total = 0;", //                                      1
  "  for (let i = 1; i <= n; i++) {", //                      2
  "    const s = String(i * i);", //                          3
  "    if (canPartition(s, 0, i))", //                        4
  "      total += i * i;   // i*i qualifies", //              5
  "  }", //                                                   6
  "  return total;", //                                       7
  "}", //                                                     8
  "function canPartition(s, start, target) {", //            9
  "  if (start === s.length) return target === 0;", //       10
  "  let num = 0;", //                                        11
  "  for (let e = start; e < s.length; e++) {", //           12
  "    num = num * 10 + (+s[e]);", //                         13
  "    if (num > target) break;", //                         14
  "    if (canPartition(s, e + 1, target - num)) return true;", // 15
  "  }", //                                                  16
  "  return false;", //                                     17
  "}", //                                                   18
];
