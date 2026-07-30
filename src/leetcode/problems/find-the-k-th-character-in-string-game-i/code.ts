export const CODE = [
  "function kthCharacter(k) {", //                            0
  "  let word = 'a';", //                                     1
  "  while (word.length < k) {", //                           2
  "    let next = '';", //                                    3
  "    for (const c of word) {", //                           4
  "      next += c === 'z' ? 'a'", //                         5
  "        : String.fromCharCode(c.charCodeAt(0) + 1);", //   6
  "    }", //                                                 7
  "    word += next;   // append the shifted copy", //        8
  "  }", //                                                   9
  "  return word[k - 1];", //                                10
  "}", //                                                    11
];
