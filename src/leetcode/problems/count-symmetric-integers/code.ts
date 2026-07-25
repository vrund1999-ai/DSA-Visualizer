export const CODE = [
  "function countSymmetricIntegers(low, high) {", //          0
  "  let count = 0;", //                                      1
  "  for (let x = low; x <= high; x++) {", //                 2
  "    const s = String(x);", //                              3
  "    if (s.length % 2 !== 0) continue;   // need even len", // 4
  "    const h = s.length / 2;", //                           5
  "    const left = sumDigits(s.slice(0, h));", //            6
  "    const right = sumDigits(s.slice(h));", //              7
  "    if (left === right) count++;   // symmetric", //       8
  "  }", //                                                   9
  "  return count;", //                                      10
  "}", //                                                    11
];
