export const CODE = [
  "function equalFrequency(word) {", //                       0
  "  const freq = tally(word);   // letter -> count", //      1
  "  for (const c of Object.keys(freq)) {", //                2
  "    freq[c]--;                // remove one 'c'", //       3
  "    const counts = values(freq).filter(v => v > 0);", //   4
  "    if (new Set(counts).size <= 1)", //                    5
  "      return true;            // all remaining equal", //  6
  "    freq[c]++;                // restore, try next", //    7
  "  }", //                                                   8
  "  return false;", //                                       9
  "}", //                                                    10
];
