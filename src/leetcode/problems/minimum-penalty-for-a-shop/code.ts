export const CODE = [
  "function bestClosingTime(customers) {", //                 0
  "  // closing at hour 0: every 'Y' is a missed customer", //1
  "  let penalty = [...customers]", //                        2
  "    .filter(c => c === 'Y').length;", //                   3
  "  let best = penalty, bestHour = 0;", //                   4
  "  for (let i = 0; i < customers.length; i++) {", //        5
  "    // hour i moves from closed to open", //               6
  "    penalty += customers[i] === 'Y' ? -1 : 1;", //         7
  "    if (penalty < best) {", //                             8
  "      best = penalty;", //                                 9
  "      bestHour = i + 1;", //                              10
  "    }", //                                                11
  "  }", //                                                  12
  "  return bestHour;", //                                   13
  "}", //                                                    14
];
