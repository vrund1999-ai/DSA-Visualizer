/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const NAIVE_CODE = [
  "for (let s = 0; s <= n - m; s++) {", //                  0
  "  let j = 0;", //                                        1
  "  while (j < m && text[s + j] === pat[j]) j++;", //      2
  "  if (j === m) report(s);", //                           3
  "}", //                                                   4
];
