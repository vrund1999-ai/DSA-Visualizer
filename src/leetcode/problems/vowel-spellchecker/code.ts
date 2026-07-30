export const CODE = [
  "function spellchecker(wordlist, queries) {", //            0
  "  const exact = new Set(wordlist);", //                    1
  "  const caps = new Map(), vowel = new Map();", //          2
  "  const devowel = w => w.toLowerCase()", //                3
  "    .replace(/[aeiou]/g, '*');", //                        4
  "  for (const w of wordlist) {", //                         5
  "    const lo = w.toLowerCase();", //                       6
  "    if (!caps.has(lo)) caps.set(lo, w);", //               7
  "    const dv = devowel(w);", //                            8
  "    if (!vowel.has(dv)) vowel.set(dv, w);", //             9
  "  }", //                                                  10
  "  return queries.map(q =>", //                            11
  "    exact.has(q) ? q :", //                               12
  "    caps.get(q.toLowerCase()) ??", //                     13
  "    vowel.get(devowel(q)) ?? '');", //                    14
  "}", //                                                    15
];
