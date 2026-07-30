export const CODE = [
  "function lenLongestFibSubseq(arr) {", //                   0
  "  const idx = new Map(arr.map((v, i) => [v, i]));", //     1
  "  const dp = new Map();   // 'j,i' -> length", //          2
  "  let best = 0;", //                                       3
  "  for (let i = 0; i < arr.length; i++)", //                4
  "    for (let j = 0; j < i; j++) {", //                     5
  "      const k = idx.get(arr[i] - arr[j]);", //             6
  "      const len = (k !== undefined && k < j)", //          7
  "        ? (dp.get(k + ',' + j) ?? 2) + 1 : 2;", //         8
  "      dp.set(j + ',' + i, len);", //                       9
  "      best = Math.max(best, len);", //                    10
  "    }", //                                                11
  "  return best >= 3 ? best : 0;", //                       12
  "}", //                                                    13
];
