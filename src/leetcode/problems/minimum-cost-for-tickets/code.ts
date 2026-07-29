export const CODE = [
  "function mincostTickets(days, costs) {", //                0
  "  const travel = new Set(days);", //                       1
  "  const last = days[days.length - 1];", //                 2
  "  const dp = new Array(last + 1).fill(0);", //             3
  "  for (let d = 1; d <= last; d++) {", //                   4
  "    if (!travel.has(d)) { dp[d] = dp[d-1]; continue; }", // 5
  "    dp[d] = Math.min(", //                                 6
  "      dp[d-1] + costs[0],          // 1-day pass", //      7
  "      dp[Math.max(0, d-7)] + costs[1],   // 7-day", //     8
  "      dp[Math.max(0, d-30)] + costs[2]); // 30-day", //    9
  "  }", //                                                  10
  "  return dp[last];", //                                   11
  "}", //                                                    12
];
