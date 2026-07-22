export const CODE = [
  "function plusOne(digits) {", //                          0
  "  for (let i = digits.length - 1; i >= 0; i--) {", //    1
  "    if (digits[i] < 9) {", //                            2
  "      digits[i]++;", //                                  3
  "      return digits;", //                                4
  "    }", //                                               5
  "    digits[i] = 0;   // carry", //                       6
  "  }", //                                                 7
  "  return [1, ...digits];   // all 9s", //                8
  "}", //                                                   9
];
