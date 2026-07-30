export const CODE = [
  "function predictPartyVictory(senate) {", //                0
  "  const n = senate.length;", //                            1
  "  const R = [], D = [];", //                               2
  "  [...senate].forEach((c, i) =>", //                       3
  "    (c === 'R' ? R : D).push(i));", //                     4
  "  while (R.length && D.length) {", //                      5
  "    const r = R.shift(), d = D.shift();", //               6
  "    if (r < d) R.push(r + n);   // R bans this D", //      7
  "    else D.push(d + n);   // D bans this R", //            8
  "  }", //                                                   9
  "  return R.length ? 'Radiant' : 'Dire';", //              10
  "}", //                                                    11
];
