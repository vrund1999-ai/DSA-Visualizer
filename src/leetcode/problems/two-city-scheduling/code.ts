export const CODE = [
  "function twoCitySchedCost(costs) {", //                          0
  "  // sort by how much cheaper city A is than B", //             1
  "  costs.sort((x, y) => (x[0]-x[1]) - (y[0]-y[1]));", //         2
  "  let total = 0, n = costs.length / 2;", //                     3
  "  for (let i = 0; i < costs.length; i++)", //                   4
  "    total += i < n ? costs[i][0]   // first half → A", //       5
  "                   : costs[i][1];  // second half → B", //      6
  "  return total;", //                                            7
  "}", //                                                          8
];
