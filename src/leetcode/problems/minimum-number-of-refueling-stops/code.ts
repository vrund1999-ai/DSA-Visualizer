export const CODE = [
  "function minRefuelStops(target, startFuel, stations) {", // 0
  "  const heap = [];   // max-heap of passed fuels", //      1
  "  let fuel = startFuel, i = 0, stops = 0;", //             2
  "  while (fuel < target) {", //                             3
  "    while (i < stations.length &&", //                     4
  "           stations[i][0] <= fuel) {", //                  5
  "      heap.push(stations[i][1]); i++;   // now reachable", // 6
  "    }", //                                                 7
  "    if (heap.length === 0) return -1;   // stuck", //      8
  "    fuel += popMax(heap);   // refuel from the biggest", // 9
  "    stops++;", //                                         10
  "  }", //                                                  11
  "  return stops;", //                                      12
  "}", //                                                    13
];
