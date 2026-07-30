export const CODE = [
  "function furthestDistanceFromOrigin(moves) {", //          0
  "  let L = 0, R = 0, wild = 0;", //                         1
  "  for (const c of moves) {", //                            2
  "    if (c === 'L') L++;", //                               3
  "    else if (c === 'R') R++;", //                          4
  "    else wild++;            // '_' can be L or R", //      5
  "  }", //                                                   6
  "  return Math.abs(L - R) + wild;", //                     7
  "}", //                                                     8
];
