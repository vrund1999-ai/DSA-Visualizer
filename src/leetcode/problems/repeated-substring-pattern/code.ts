export const CODE = [
  "function repeatedSubstringPattern(s) {", //                0
  "  const n = s.length;", //                                 1
  "  for (let len = 1; len <= n / 2; len++) {", //            2
  "    if (n % len !== 0) continue;   // must tile evenly", // 3
  "    const pattern = s.slice(0, len);", //                  4
  "    if (pattern.repeat(n / len) === s)", //                5
  "      return true;", //                                    6
  "  }", //                                                   7
  "  return false;", //                                       8
  "}", //                                                     9
];
