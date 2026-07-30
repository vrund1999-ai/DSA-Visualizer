export const CODE = [
  "function canCross(stones) {", //                           0
  "  const jumps = new Map();   // stone -> set of k", //     1
  "  for (const s of stones) jumps.set(s, new Set());", //    2
  "  jumps.get(stones[0]).add(0);", //                        3
  "  for (const s of stones) {", //                           4
  "    for (const k of jumps.get(s)) {", //                   5
  "      for (const step of [k - 1, k, k + 1]) {", //         6
  "        if (step > 0 && jumps.has(s + step))", //          7
  "          jumps.get(s + step).add(step);", //              8
  "      }", //                                               9
  "    }", //                                                10
  "  }", //                                                  11
  "  const last = stones[stones.length - 1];", //            12
  "  return jumps.get(last).size > 0;", //                   13
  "}", //                                                    14
];
