export const CODE = [
  "function canPermutePalindrome(s) {", //                    0
  "  const odd = new Set();", //                              1
  "  for (const c of s) {", //                               2
  "    if (odd.has(c)) odd.delete(c);   // even now", //     3
  "    else odd.add(c);                 // odd now", //      4
  "  }", //                                                   5
  "  return odd.size <= 1;   // ≤1 char with odd count", //  6
  "}", //                                                     7
];
