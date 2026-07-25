export const CODE = [
  "function fullJustify(words, maxWidth) {", //               0
  "  const lines = [];", //                                   1
  "  for (let i = 0; i < words.length; ) {", //               2
  "    let j = i, len = 0;", //                                3
  "    while (j < words.length &&", //                        4
  "           len + words[j].length + (j - i) <= maxWidth)", // 5
  "      len += words[j++].length;   // greedily pack", //    6
  "    const gaps = j - i - 1;", //                           7
  "    const isLast = j === words.length;", //                8
  "    if (gaps === 0 || isLast)", //                         9
  "      lines.push(leftJustify(words, i, j, maxWidth));", // 10
  "    else", //                                              11
  "      lines.push(spread(words, i, j, len, maxWidth));", // 12
  "    i = j;", //                                            13
  "  }", //                                                   14
  "  return lines;", //                                       15
  "}", //                                                    16
];
