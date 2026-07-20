/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const RABIN_KARP_CODE = [
  "let ph = hash(pat), th = hash(text[0..m));", //          0
  "for (let s = 0; s <= n - m; s++) {", //                  1
  "  if (th === ph && text.slice(s, s+m) === pat)", //      2
  "    report(s);", //                                      3
  "  if (s < n - m)", //                                    4
  "    th = th - text[s] + text[s + m];  // roll", //       5
  "}", //                                                   6
];
