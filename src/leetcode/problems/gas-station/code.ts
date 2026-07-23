export const CODE = [
  "function canCompleteCircuit(gas, cost) {", //                     0
  "  let total = 0, tank = 0, start = 0;", //                       1
  "  for (let i = 0; i < gas.length; i++) {", //                    2
  "    const diff = gas[i] - cost[i];", //                          3
  "    total += diff; tank += diff;", //                            4
  "    if (tank < 0) {          // can't reach i+1", //             5
  "      start = i + 1; tank = 0;   // restart here", //            6
  "    }", //                                                       7
  "  }", //                                                         8
  "  return total >= 0 ? start : -1;", //                           9
  "}", //                                                           10
];
