export const CODE = [
  "function reverseVowels(s) {", //                           0
  "  const a = s.split('');", //                              1
  "  const vowels = new Set('aeiouAEIOU');", //               2
  "  let i = 0, j = a.length - 1;", //                        3
  "  while (i < j) {", //                                     4
  "    if (!vowels.has(a[i])) { i++; continue; }", //         5
  "    if (!vowels.has(a[j])) { j--; continue; }", //         6
  "    [a[i], a[j]] = [a[j], a[i]];   // swap vowels", //     7
  "    i++; j--;", //                                         8
  "  }", //                                                   9
  "  return a.join('');", //                                  10
  "}", //                                                     11
];
