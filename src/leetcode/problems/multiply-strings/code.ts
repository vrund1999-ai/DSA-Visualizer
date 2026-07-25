export const CODE = [
  "function multiply(num1, num2) {", //                       0
  "  if (num1 === '0' || num2 === '0') return '0';", //       1
  "  const m = num1.length, n = num2.length;", //             2
  "  const res = new Array(m + n).fill(0);", //               3
  "  for (let i = m - 1; i >= 0; i--) {", //                  4
  "    for (let j = n - 1; j >= 0; j--) {", //                5
  "      const mul = (+num1[i]) * (+num2[j]);", //            6
  "      const p1 = i + j, p2 = i + j + 1;", //               7
  "      const sum = mul + res[p2];", //                      8
  "      res[p2] = sum % 10;", //                             9
  "      res[p1] += Math.floor(sum / 10);   // carry", //    10
  "    }", //                                                11
  "  }", //                                                  12
  "  return res.join('').replace(/^0+/, '');", //            13
  "}", //                                                    14
];
