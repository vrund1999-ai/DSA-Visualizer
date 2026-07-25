export const CODE = [
  "function areOccurrencesEqual(s) {", //                     0
  "  const freq = {};", //                                    1
  "  for (const ch of s)", //                                 2
  "    freq[ch] = (freq[ch] ?? 0) + 1;", //                   3
  "  const counts = Object.values(freq);", //                 4
  "  return counts.every(c => c === counts[0]);", //          5
  "}", //                                                     6
];
