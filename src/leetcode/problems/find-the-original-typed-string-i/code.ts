export const CODE = [
  "function possibleStringCount(word) {", //                  0
  "  // the original, or one long-press removed", //          1
  "  let count = 1;", //                                      2
  "  for (let i = 1; i < word.length; i++) {", //             3
  "    if (word[i] === word[i - 1])", //                      4
  "      count++;   // this repeat could be a long press", // 5
  "  }", //                                                   6
  "  return count;", //                                       7
  "}", //                                                     8
];
