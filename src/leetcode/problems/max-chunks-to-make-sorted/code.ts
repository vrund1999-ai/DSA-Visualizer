export const CODE = [
  "function maxChunksToSorted(arr) {", //                     0
  "  let chunks = 0, max = 0;", //                            1
  "  for (let i = 0; i < arr.length; i++) {", //              2
  "    max = Math.max(max, arr[i]);", //                      3
  "    if (max === i)   // everything ≤ i placed", //         4
  "      chunks++;      // cut a chunk here", //              5
  "  }", //                                                   6
  "  return chunks;", //                                      7
  "}", //                                                     8
];
