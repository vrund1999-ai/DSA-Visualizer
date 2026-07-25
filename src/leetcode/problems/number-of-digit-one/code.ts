export const CODE = [
  "function countDigitOne(n) {", //                           0
  "  let count = 0;", //                                      1
  "  for (let place = 1; place <= n; place *= 10) {", //      2
  "    const high = Math.floor(n / (place * 10));", //        3
  "    const cur  = Math.floor(n / place) % 10;", //          4
  "    const low  = n % place;", //                           5
  "    if (cur === 0)      count += high * place;", //        6
  "    else if (cur === 1) count += high * place + low + 1;", // 7
  "    else                count += (high + 1) * place;", //  8
  "  }", //                                                   9
  "  return count;", //                                      10
  "}", //                                                    11
];
