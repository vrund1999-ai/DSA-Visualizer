export const CODE = [
  "function addDigits(num) {", //                             0
  "  while (num >= 10) {", //                                 1
  "    let sum = 0;", //                                      2
  "    for (const d of String(num))", //                     3
  "      sum += Number(d);   // add each digit", //           4
  "    num = sum;   // repeat on the new number", //          5
  "  }", //                                                   6
  "  return num;   // the digital root", //                   7
  "}", //                                                     8
];
