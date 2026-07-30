export const CODE = [
  "function sumZero(n) {", //                                 0
  "  const res = [];", //                                     1
  "  for (let i = 1; i <= Math.floor(n / 2); i++) {", //      2
  "    res.push(i, -i);        // a balanced pair", //        3
  "  }", //                                                   4
  "  if (n % 2 === 1) res.push(0);   // odd: pad with 0", //  5
  "  return res;", //                                         6
  "}", //                                                     7
];
