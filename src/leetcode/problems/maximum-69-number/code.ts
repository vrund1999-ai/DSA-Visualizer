export const CODE = [
  "function maximum69Number(num) {", //                       0
  "  const digits = [...`${num}`];", //                       1
  "  for (let i = 0; i < digits.length; i++) {", //           2
  "    if (digits[i] === '6') {", //                          3
  "      digits[i] = '9';   // first 6 -> 9 is best", //      4
  "      break;", //                                          5
  "    }", //                                                 6
  "  }", //                                                   7
  "  return Number(digits.join(''));", //                     8
  "}", //                                                     9
];
