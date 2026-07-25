export const CODE = [
  "function jobScheduling(startTime, endTime, profit) {", //  0
  "  const jobs = zip(startTime, endTime, profit)", //        1
  "    .sort((a, b) => a.end - b.end);", //                   2
  "  const ends = jobs.map(j => j.end);", //                  3
  "  const dp = [0];   // best profit after i jobs", //       4
  "  for (const job of jobs) {", //                           5
  "    // latest job ending <= this job's start", //         6
  "    const i = upperBound(ends, job.start);", //            7
  "    const take = dp[i] + job.profit;", //                  8
  "    dp.push(Math.max(dp.at(-1), take));", //               9
  "  }", //                                                  10
  "  return dp.at(-1);", //                                  11
  "}", //                                                    12
];
