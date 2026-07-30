export const CODE = [
  "function numWaterBottles(numBottles, numExchange) {", //   0
  "  let drunk = numBottles;", //                             1
  "  let empty = numBottles;", //                             2
  "  while (empty >= numExchange) {", //                      3
  "    const fresh = Math.floor(empty / numExchange);", //    4
  "    drunk += fresh;   // drink the new bottles", //        5
  "    empty = empty % numExchange + fresh;", //              6
  "  }", //                                                   7
  "  return drunk;", //                                       8
  "}", //                                                     9
];
