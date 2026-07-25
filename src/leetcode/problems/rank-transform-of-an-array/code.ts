export const CODE = [
  "function arrayRankTransform(arr) {", //                    0
  "  const sorted = [...new Set(arr)].sort((a,b)=>a-b);", //  1
  "  const rank = new Map();", //                             2
  "  sorted.forEach((v, i) => rank.set(v, i + 1));", //       3
  "  return arr.map(v => rank.get(v));", //                   4
  "}", //                                                     5
];
