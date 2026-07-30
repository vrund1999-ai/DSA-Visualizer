export const CODE = [
  "function getSkyline(buildings) {", //                      0
  "  const events = [];", //                                  1
  "  for (const [l, r, h] of buildings) {", //                2
  "    events.push([l, -h]);   // start", //                  3
  "    events.push([r, h]);    // end", //                    4
  "  }", //                                                   5
  "  events.sort((a, b) => a[0]-b[0] || a[1]-b[1]);", //      6
  "  const active = [0];   // heights, ground = 0", //        7
  "  const res = [];", //                                     8
  "  let prev = 0;", //                                       9
  "  for (const [x, h] of events) {", //                     10
  "    if (h < 0) active.push(-h);   // building starts", // 11
  "    else active.splice(active.indexOf(h), 1);   // ends", //12
  "    const cur = Math.max(...active);", //                 13
  "    if (cur !== prev) {", //                              14
  "      res.push([x, cur]);   // key point", //             15
  "      prev = cur;", //                                    16
  "    }", //                                                17
  "  }", //                                                  18
  "  return res;", //                                        19
  "}", //                                                    20
];
