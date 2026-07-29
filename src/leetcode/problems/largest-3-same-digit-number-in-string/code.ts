export const CODE = [
  "function largestGoodInteger(num) {", //                    0
  "  let best = '';", //                                      1
  "  for (let i = 0; i + 2 < num.length; i++) {", //          2
  "    if (num[i] === num[i+1] &&", //                        3
  "        num[i+1] === num[i+2]) {   // three in a row", //  4
  "      const triple = num.slice(i, i + 3);", //             5
  "      if (triple > best) best = triple;", //               6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                    10
];
