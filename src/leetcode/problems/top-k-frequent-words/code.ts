export const CODE = [
  "function topKFrequent(words, k) {", //                     0
  "  const freq = new Map();", //                             1
  "  for (const w of words)", //                              2
  "    freq.set(w, (freq.get(w) ?? 0) + 1);", //             3
  "  const unique = [...freq.keys()];", //                    4
  "  unique.sort((a, b) =>", //                               5
  "    freq.get(b) - freq.get(a)   // higher freq first", // 6
  "    || a.localeCompare(b));     // tie: alphabetical", // 7
  "  return unique.slice(0, k);", //                          8
  "}", //                                                     9
];
