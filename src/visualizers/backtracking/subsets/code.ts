/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const SUBSETS_CODE = [
  "function backtrack(i, cur) {", //                    0
  "  if (i === n) { output(cur); return; }", //         1
  "  backtrack(i + 1, cur);        // exclude a[i]", // 2
  "  cur.push(a[i]);", //                               3
  "  backtrack(i + 1, cur);        // include a[i]", // 4
  "  cur.pop();                    // undo", //         5
  "}", //                                               6
];
