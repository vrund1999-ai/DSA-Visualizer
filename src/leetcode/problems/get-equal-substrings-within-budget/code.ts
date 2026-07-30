export const CODE = [
  "function equalSubstring(s, t, maxCost) {", //              0
  "  let left = 0, cost = 0, best = 0;", //                   1
  "  for (let right = 0; right < s.length; right++) {", //    2
  "    cost += Math.abs(s.charCodeAt(right)", //              3
  "                   - t.charCodeAt(right));", //            4
  "    while (cost > maxCost) {   // shrink", //              5
  "      cost -= Math.abs(s.charCodeAt(left)", //             6
  "                     - t.charCodeAt(left));", //           7
  "      left++;", //                                         8
  "    }", //                                                 9
  "    best = Math.max(best, right - left + 1);", //         10
  "  }", //                                                  11
  "  return best;", //                                       12
  "}", //                                                    13
];
