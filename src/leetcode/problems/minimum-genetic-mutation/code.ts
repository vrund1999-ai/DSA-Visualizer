export const CODE = [
  "function minMutation(start, end, bank) {", //              0
  "  const set = new Set(bank);", //                          1
  "  if (!set.has(end)) return -1;", //                       2
  "  let queue = [start], steps = 0;", //                     3
  "  const seen = new Set([start]);", //                      4
  "  while (queue.length) {", //                              5
  "    const next = [];", //                                  6
  "    for (const gene of queue) {", //                       7
  "      if (gene === end) return steps;", //                 8
  "      for (const m of mutations(gene))", //                9
  "        if (set.has(m) && !seen.has(m)) {", //            10
  "          seen.add(m); next.push(m);", //                 11
  "        }", //                                            12
  "    }", //                                                13
  "    queue = next; steps++;", //                           14
  "  }", //                                                  15
  "  return -1;", //                                         16
  "}", //                                                    17
];
