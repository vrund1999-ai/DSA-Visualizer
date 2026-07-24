export const CODE = [
  "function intToRoman(num) {", //                                    0
  "  const map = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],", //   1
  "    [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],", //                  2
  "    [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];", //             3
  "  let res = '';", //                                              4
  "  for (const [v, sym] of map)", //                               5
  "    while (num >= v) { res += sym; num -= v; }", //              6
  "  return res;", //                                                7
  "}", //                                                            8
];
