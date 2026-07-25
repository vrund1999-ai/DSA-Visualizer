export const CODE = [
  "function carFleet(target, position, speed) {", //          0
  "  const cars = position", //                               1
  "    .map((p, i) => [p, (target - p) / speed[i]])", //      2
  "    .sort((a, b) => b[0] - a[0]);   // nearest target 1st", // 3
  "  let fleets = 0, lead = 0;", //                           4
  "  for (const [, time] of cars) {", //                      5
  "    if (time > lead) {", //                                6
  "      fleets++;         // can't catch the car ahead", //  7
  "      lead = time;      // new slowest leader", //         8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return fleets;", //                                     11
  "}", //                                                    12
];
