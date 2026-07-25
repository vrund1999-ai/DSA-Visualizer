export const CODE = [
  "function convertToTitle(n) {", //                          0
  "  let title = '';", //                                     1
  "  while (n > 0) {", //                                     2
  "    n--;                       // shift to 0-based", //    3
  "    const r = n % 26;", //                                 4
  "    title = String.fromCharCode(65 + r) + title;", //      5
  "    n = Math.floor(n / 26);", //                           6
  "  }", //                                                   7
  "  return title;", //                                       8
  "}", //                                                     9
];
