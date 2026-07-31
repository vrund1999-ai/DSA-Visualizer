export const CODE = [
  "function maxDistance(colors) {", //                        0
  "  const n = colors.length;", //                            1
  "  let best = 0;", //                                       2
  "  // an optimal pair always uses an endpoint", //          3
  "  for (let j = 0; j < n; j++)", //                         4
  "    if (colors[j] !== colors[0])", //                      5
  "      best = Math.max(best, j);        // vs first", //    6
  "  for (let i = 0; i < n; i++)", //                         7
  "    if (colors[i] !== colors[n - 1])", //                  8
  "      best = Math.max(best, n - 1 - i); // vs last", //    9
  "  return best;", //                                       10
  "}", //                                                    11
];
