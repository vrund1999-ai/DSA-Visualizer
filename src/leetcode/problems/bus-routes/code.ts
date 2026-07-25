export const CODE = [
  "function numBusesToDestination(routes, source, target) {", // 0
  "  if (source === target) return 0;", //                   1
  "  const stopToRoutes = buildIndex(routes);", //           2
  "  const seenRoutes = new Set();", //                       3
  "  let queue = stopToRoutes[source] ?? [];", //            4
  "  let buses = 1;", //                                      5
  "  while (queue.length) {", //                              6
  "    const next = [];", //                                  7
  "    for (const r of queue) {", //                          8
  "      for (const stop of routes[r]) {", //                9
  "        if (stop === target) return buses;", //          10
  "        for (const nr of stopToRoutes[stop])", //        11
  "          if (!seenRoutes.has(nr)) {", //                12
  "            seenRoutes.add(nr); next.push(nr);", //       13
  "          }", //                                          14
  "      }", //                                              15
  "    }", //                                                16
  "    queue = next; buses++;   // one more transfer", //    17
  "  }", //                                                  18
  "  return -1;", //                                         19
  "}", //                                                    20
];
