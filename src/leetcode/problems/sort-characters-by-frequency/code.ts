export const CODE = [
  "function frequencySort(s) {", //                           0
  "  const freq = new Map();", //                             1
  "  for (const c of s)", //                                  2
  "    freq.set(c, (freq.get(c) ?? 0) + 1);", //             3
  "  const chars = [...freq.keys()];", //                     4
  "  chars.sort((a, b) => freq.get(b) - freq.get(a));", //   5
  "  return chars", //                                        6
  "    .map(c => c.repeat(freq.get(c)))", //                 7
  "    .join('');", //                                        8
  "}", //                                                     9
];
