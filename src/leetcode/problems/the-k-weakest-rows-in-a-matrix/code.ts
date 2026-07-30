export const CODE = [
  "function kWeakestRows(mat, k) {", //                       0
  "  const strength = mat.map((row, i) =>", //                1
  "    [row.reduce((a, b) => a + b, 0), i]);   // [count,i]", //2
  "  strength.sort((a, b) =>", //                             3
  "    a[0] - b[0] || a[1] - b[1]);   // weak first", //      4
  "  return strength", //                                     5
  "    .slice(0, k)", //                                      6
  "    .map(([, i]) => i);", //                               7
  "}", //                                                     8
];
