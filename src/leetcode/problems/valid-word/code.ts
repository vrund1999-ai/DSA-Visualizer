export const CODE = [
  "function isValid(word) {", //                              0
  "  if (word.length < 3) return false;", //                  1
  "  let hasVowel = false, hasConsonant = false;", //         2
  "  for (const ch of word) {", //                            3
  "    if (/[a-z]/i.test(ch)) {", //                          4
  "      if ('aeiou'.includes(ch.toLowerCase()))", //         5
  "        hasVowel = true;", //                              6
  "      else hasConsonant = true;", //                       7
  "    } else if (!/[0-9]/.test(ch)) {", //                   8
  "      return false;   // illegal character", //            9
  "    }", //                                                10
  "  }", //                                                  11
  "  return hasVowel && hasConsonant;", //                   12
  "}", //                                                    13
];
