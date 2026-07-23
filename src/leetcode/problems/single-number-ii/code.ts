export const CODE = [
  "function singleNumber(nums) {", //                        0
  "  const bits = new Array(32).fill(0);", //               1
  "  for (const x of nums)", //                             2
  "    for (let b = 0; b < 32; b++)", //                    3
  "      bits[b] += (x >> b) & 1;   // tally each bit", //  4
  "  let res = 0;", //                                      5
  "  for (let b = 0; b < 32; b++)", //                      6
  "    if (bits[b] % 3) res |= 1 << b;   // not ÷3", //     7
  "  return res;", //                                       8
  "}", //                                                   9
];
