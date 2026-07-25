export const CODE = [
  "function findRadius(houses, heaters) {", //                0
  "  houses.sort((a, b) => a - b);", //                       1
  "  heaters.sort((a, b) => a - b);", //                      2
  "  let radius = 0, j = 0;", //                              3
  "  for (const house of houses) {", //                       4
  "    // advance to the closest heater", //                  5
  "    while (j + 1 < heaters.length &&", //                  6
  "      Math.abs(heaters[j+1]-house) <= Math.abs(heaters[j]-house))",//7
  "      j++;", //                                             8
  "    radius = Math.max(radius, Math.abs(heaters[j]-house));",//9
  "  }", //                                                  10
  "  return radius;", //                                     11
  "}", //                                                    12
];
