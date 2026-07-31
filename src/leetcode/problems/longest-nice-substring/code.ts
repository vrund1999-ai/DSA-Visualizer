export const CODE = [
  "function longestNiceSubstring(s) {", //                    0
  "  if (s.length < 2) return '';", //                        1
  "  const set = new Set(s);", //                             2
  "  for (let i = 0; i < s.length; i++) {", //                3
  "    const c = s[i];", //                                   4
  "    // both cases present? then c is fine", //             5
  "    if (set.has(c.toUpperCase()) &&", //                   6
  "        set.has(c.toLowerCase())) continue;", //           7
  "    // c can't be in any nice substring -> split here", // 8
  "    const left = longestNiceSubstring(s.slice(0, i));", // 9
  "    const right = longestNiceSubstring(s.slice(i + 1));", //10
  "    return right.length > left.length ? right : left;", // 11
  "  }", //                                                   12
  "  return s;   // every char has both cases", //            13
  "}", //                                                     14
];
