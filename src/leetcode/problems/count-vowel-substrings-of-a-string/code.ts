export const CODE = [
  "function countVowelSubstrings(word) {", //                 0
  "  const isV = c => 'aeiou'.includes(c);", //               1
  "  let count = 0;", //                                      2
  "  for (let i = 0; i < word.length; i++) {", //             3
  "    const seen = new Set();", //                           4
  "    for (let j = i; j < word.length; j++) {", //           5
  "      if (!isV(word[j])) break;   // must be all vowels", //6
  "      seen.add(word[j]);", //                              7
  "      if (seen.size === 5) count++;   // has a,e,i,o,u", //8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return count;", //                                      11
  "}", //                                                    12
];
