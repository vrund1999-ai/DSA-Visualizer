export const CODE = [
  "function carPooling(trips, capacity) {", //                0
  "  const diff = new Array(1001).fill(0);", //               1
  "  for (const [num, from, to] of trips) {", //              2
  "    diff[from] += num;   // board", //                     3
  "    diff[to]   -= num;   // alight", //                    4
  "  }", //                                                   5
  "  let onboard = 0;", //                                    6
  "  for (const d of diff) {", //                             7
  "    onboard += d;   // running occupancy", //              8
  "    if (onboard > capacity) return false;", //             9
  "  }", //                                                  10
  "  return true;", //                                       11
  "}", //                                                    12
];
