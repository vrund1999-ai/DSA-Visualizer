export const CODE = [
  "function lemonadeChange(bills) {", //                      0
  "  let five = 0, ten = 0;", //                              1
  "  for (const bill of bills) {", //                         2
  "    if (bill === 5) five++;", //                           3
  "    else if (bill === 10) { five--; ten++; }", //          4
  "    else if (ten > 0) { ten--; five--; }   // $15", //     5
  "    else five -= 3;   // give three $5", //                6
  "    if (five < 0) return false;   // can't make change",// 7
  "  }", //                                                   8
  "  return true;", //                                        9
  "}", //                                                    10
];
