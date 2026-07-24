export const CODE = [
  "function largestRectangleArea(h) {", //                          0
  "  const stack = [];   // indices, increasing height", //        1
  "  let best = 0;", //                                            2
  "  for (let i = 0; i <= h.length; i++) {", //                    3
  "    const cur = i === h.length ? 0 : h[i];", //                 4
  "    while (stack.length && h[stack.at(-1)] > cur) {", //        5
  "      const height = h[stack.pop()];", //                       6
  "      const left = stack.at(-1) ?? -1;", //                     7
  "      best = Math.max(best, height * (i - left - 1));", //      8
  "    }", //                                                      9
  "    stack.push(i);", //                                         10
  "  }", //                                                        11
  "  return best;", //                                             12
  "}", //                                                          13
];
