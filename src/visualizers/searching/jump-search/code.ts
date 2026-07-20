/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const JUMP_SEARCH_CODE = [
  "const step = Math.floor(Math.sqrt(n));", //        0
  "let prev = 0, curr = step;", //                    1
  "while (curr < n && a[curr-1] < target) {", //      2
  "  prev = curr; curr += step;", //                  3
  "}", //                                             4
  "for (let i = prev; i < min(curr, n); i++)", //     5
  "  if (a[i] === target) return i;", //              6
  "return -1;", //                                    7
];
