export const CODE = [
  "function grayCode(n) {", //                                0
  "  const res = [];", //                                     1
  "  const total = 1 << n;   // 2^n codes", //                2
  "  for (let i = 0; i < total; i++) {", //                   3
  "    res.push(i ^ (i >> 1));   // reflect the bits", //     4
  "  }", //                                                   5
  "  return res;   // adjacent codes differ by 1 bit", //     6
  "}", //                                                     7
];
