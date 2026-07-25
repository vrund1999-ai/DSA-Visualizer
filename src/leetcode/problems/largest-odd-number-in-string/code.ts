export const CODE = [
  "function largestOddNumber(num) {", //                      0
  "  for (let i = num.length - 1; i >= 0; i--) {", //         1
  "    if ((num.charCodeAt(i) - 48) % 2 === 1)", //           2
  "      return num.slice(0, i + 1);   // odd last digit", // 3
  "  }", //                                                   4
  "  return '';   // no odd digit anywhere", //               5
  "}", //                                                     6
];
