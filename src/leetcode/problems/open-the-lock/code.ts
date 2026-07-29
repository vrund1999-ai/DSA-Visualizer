export const CODE = [
  "function openLock(deadends, target) {", //                 0
  "  const dead = new Set(deadends);", //                     1
  "  if (dead.has('0000')) return -1;", //                    2
  "  const seen = new Set(['0000']);", //                     3
  "  let queue = ['0000'], moves = 0;", //                    4
  "  while (queue.length) {", //                              5
  "    const next = [];", //                                  6
  "    for (const state of queue) {", //                      7
  "      if (state === target) return moves;", //             8
  "      for (const nb of neighbors(state))", //              9
  "        if (!dead.has(nb) && !seen.has(nb)) {", //        10
  "          seen.add(nb); next.push(nb);", //               11
  "        }", //                                            12
  "    }", //                                                13
  "    queue = next; moves++;   // one more turn", //        14
  "  }", //                                                  15
  "  return -1;", //                                         16
  "}", //                                                    17
];
