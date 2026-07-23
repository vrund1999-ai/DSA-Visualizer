export const CODE = [
  "function myAtoi(s) {", //                                        0
  "  let i = 0, sign = 1, num = 0;", //                            1
  "  while (s[i] === ' ') i++;              // skip spaces", //    2
  "  if (s[i] === '+' || s[i] === '-')", //                        3
  "    sign = s[i++] === '-' ? -1 : 1;      // sign", //           4
  "  while (s[i] >= '0' && s[i] <= '9')", //                       5
  "    num = num * 10 + (+s[i++]);          // digits", //         6
  "  num *= sign;", //                                             7
  "  return clamp(num, -2**31, 2**31 - 1);  // 32-bit", //         8
  "}", //                                                          9
];
