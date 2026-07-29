export const CODE = [
  "function deleteAndEarn(nums) {", //                        0
  "  const max = Math.max(...nums);", //                      1
  "  const points = new Array(max + 1).fill(0);", //          2
  "  for (const n of nums) points[n] += n;   // total value", // 3
  "  let take = 0, skip = 0;   // house-robber DP", //        4
  "  for (let v = 0; v <= max; v++) {", //                    5
  "    const newTake = skip + points[v];   // take v", //     6
  "    skip = Math.max(skip, take);         // skip v", //    7
  "    take = newTake;", //                                   8
  "  }", //                                                   9
  "  return Math.max(take, skip);", //                       10
  "}", //                                                    11
];
