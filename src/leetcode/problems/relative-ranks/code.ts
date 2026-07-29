export const CODE = [
  "function findRelativeRanks(score) {", //                   0
  "  const order = score", //                                 1
  "    .map((s, i) => i)", //                                 2
  "    .sort((a, b) => score[b] - score[a]);   // desc", //   3
  "  const medals = ['Gold Medal','Silver Medal','Bronze Medal'];", // 4
  "  const ans = new Array(score.length);", //                5
  "  order.forEach((idx, rank) => {", //                      6
  "    ans[idx] = medals[rank] ?? String(rank + 1);", //      7
  "  });", //                                                 8
  "  return ans;", //                                         9
  "}", //                                                    10
];
