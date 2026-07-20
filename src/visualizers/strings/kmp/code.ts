/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const KMP_CODE = [
  "const lps = buildLPS(pat);", //                          0
  "let i = 0, j = 0;", //                                   1
  "while (i < n) {", //                                     2
  "  if (text[i] === pat[j]) { i++; j++; }", //             3
  "  else if (j > 0) j = lps[j - 1];  // reuse prefix", //  4
  "  else i++;", //                                         5
  "  if (j === m) { report(i - m); j = lps[j - 1]; }", //   6
  "}", //                                                   7
];
