export const CODE = [
  "const BELOW20 = ['','One','Two',...,'Nineteen'];", //      0
  "const TENS = ['','','Twenty',...,'Ninety'];", //           1
  "const SCALE = ['','Thousand','Million','Billion'];", //    2
  "function numberToWords(num) {", //                         3
  "  if (num === 0) return 'Zero';", //                       4
  "  const three = n =>            // words for 0..999", //   5
  "    n === 0 ? '' :", //                                    6
  "    n < 20 ? BELOW20[n] :", //                             7
  "    n < 100 ? TENS[n/10|0] + ' ' + three(n%10) :", //      8
  "    BELOW20[n/100|0] + ' Hundred ' + three(n%100);", //    9
  "  let words = '', i = 0;", //                             10
  "  while (num > 0) {", //                                  11
  "    if (num % 1000)", //                                  12
  "      words = three(num%1000)+' '+SCALE[i]+' '+words;", //13
  "    num = num / 1000 | 0; i++;", //                       14
  "  }", //                                                  15
  "  return words.trim().replace(/\\s+/g, ' ');", //         16
  "}", //                                                    17
];
