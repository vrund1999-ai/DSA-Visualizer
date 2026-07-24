export const CODE = [
  "function mergeAlternately(w1, w2) {", //                  0
  "  let res = '', i = 0;", //                              1
  "  while (i < w1.length || i < w2.length) {", //          2
  "    if (i < w1.length) res += w1[i];", //                3
  "    if (i < w2.length) res += w2[i];", //                4
  "    i++;", //                                            5
  "  }", //                                                 6
  "  return res;", //                                       7
  "}", //                                                   8
];
