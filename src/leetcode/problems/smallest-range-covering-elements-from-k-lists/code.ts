export const CODE = [
  "function smallestRange(lists) {", //                       0
  "  const ptr = lists.map(() => 0);", //                     1
  "  let best = [-1e9, 1e9];", //                             2
  "  while (true) {", //                                      3
  "    let lo = Infinity, hi = -Infinity, minList = 0;", //   4
  "    for (let i = 0; i < lists.length; i++) {", //          5
  "      const v = lists[i][ptr[i]];", //                     6
  "      if (v < lo) { lo = v; minList = i; }", //            7
  "      if (v > hi) hi = v;", //                             8
  "    }", //                                                 9
  "    if (hi - lo < best[1] - best[0]) best = [lo, hi];", //10
  "    if (++ptr[minList] === lists[minList].length)", //    11
  "      break;   // a list is exhausted", //                12
  "  }", //                                                  13
  "  return best;", //                                       14
  "}", //                                                    15
];
