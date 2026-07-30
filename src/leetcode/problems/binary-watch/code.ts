export const CODE = [
  "function readBinaryWatch(turnedOn) {", //                  0
  "  const res = [];", //                                     1
  "  for (let h = 0; h < 12; h++)", //                        2
  "    for (let m = 0; m < 60; m++) {", //                    3
  "      const bits = popcount(h) + popcount(m);", //         4
  "      if (bits === turnedOn) {", //                        5
  "        const mm = String(m).padStart(2, '0');", //        6
  "        res.push(`${h}:${mm}`);   // valid time", //       7
  "      }", //                                               8
  "    }", //                                                 9
  "  return res;", //                                        10
  "}", //                                                    11
];
