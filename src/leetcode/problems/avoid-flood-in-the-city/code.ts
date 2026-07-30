export const CODE = [
  "function avoidFlood(rains) {", //                          0
  "  const ans = Array(rains.length).fill(1);", //            1
  "  const full = new Map();   // lake -> day it filled", //  2
  "  const dry = [];           // available dry-day indices", //3
  "  for (let i = 0; i < rains.length; i++) {", //            4
  "    const lake = rains[i];", //                            5
  "    if (lake === 0) { dry.push(i); continue; }", //        6
  "    ans[i] = -1;", //                                      7
  "    if (full.has(lake)) {", //                             8
  "      const k = dry.findIndex(d => d > full.get(lake));", //9
  "      if (k === -1) return [];   // flood!", //           10
  "      ans[dry[k]] = lake;        // dry this lake", //     11
  "      dry.splice(k, 1);", //                              12
  "    }", //                                                13
  "    full.set(lake, i);", //                               14
  "  }", //                                                  15
  "  return ans;", //                                        16
  "}", //                                                    17
];
