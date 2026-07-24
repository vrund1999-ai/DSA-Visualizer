export const CODE = [
  "function divide(dividend, divisor) {", //                  0
  "  const neg = (dividend < 0) !== (divisor < 0);", //       1
  "  let a = Math.abs(dividend), b = Math.abs(divisor);", //  2
  "  let quotient = 0;", //                                   3
  "  while (a >= b) {", //                                    4
  "    let temp = b, multiple = 1;", //                       5
  "    while (a >= (temp << 1)) {", //                        6
  "      temp <<= 1; multiple <<= 1;   // double", //         7
  "    }", //                                                 8
  "    a -= temp; quotient += multiple;", //                  9
  "  }", //                                                   10
  "  return neg ? -quotient : quotient;", //                  11
  "}", //                                                     12
];
