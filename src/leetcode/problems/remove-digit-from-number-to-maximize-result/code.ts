export const CODE = [
  "function removeDigit(number, digit) {", //                 0
  "  let best = '';", //                                       1
  "  for (let i = 0; i < number.length; i++) {", //           2
  "    if (number[i] !== digit) continue;", //                3
  "    const candidate =", //                                 4
  "      number.slice(0, i) + number.slice(i + 1);", //       5
  "    if (candidate > best) best = candidate;", //           6
  "    //  string compare works: equal length", //            7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
];
