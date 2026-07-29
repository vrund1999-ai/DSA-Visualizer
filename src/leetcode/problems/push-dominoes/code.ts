export const CODE = [
  "function pushDominoes(d) {", //                            0
  "  const n = d.length, force = new Array(n).fill(0);", //   1
  "  let f = 0;                       // left -> right", //    2
  "  for (let i = 0; i < n; i++) {", //                       3
  "    if (d[i] === 'R') f = n;", //                          4
  "    else if (d[i] === 'L') f = 0;", //                     5
  "    else f = Math.max(f - 1, 0);", //                      6
  "    force[i] += f;                 // rightward push", //  7
  "  }", //                                                   8
  "  f = 0;                           // right -> left", //   9
  "  for (let i = n - 1; i >= 0; i--) {", //                 10
  "    if (d[i] === 'L') f = n;", //                          11
  "    else if (d[i] === 'R') f = 0;", //                    12
  "    else f = Math.max(f - 1, 0);", //                     13
  "    force[i] -= f;                 // leftward push", //   14
  "  }", //                                                  15
  "  return force.map(v => v>0?'R':v<0?'L':'.').join('');", // 16
  "}", //                                                    17
];
