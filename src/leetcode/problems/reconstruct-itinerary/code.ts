export const CODE = [
  "function findItinerary(tickets) {", //                     0
  "  const g = new Map();   // from -> min-heap of dests", // 1
  "  for (const [f, t] of tickets.sort()) push(g, f, t);", // 2
  "  const route = [], stack = ['JFK'];", //                  3
  "  while (stack.length) {", //                              4
  "    const u = stack[stack.length - 1];", //                5
  "    if (g.get(u)?.length) {", //                           6
  "      stack.push(g.get(u).shift());   // walk smallest", // 7
  "    } else {", //                                          8
  "      route.push(stack.pop());        // dead end", //     9
  "    }", //                                                10
  "  }", //                                                  11
  "  return route.reverse();", //                            12
  "}", //                                                    13
];
