export const CODE = [
  "function countGoodTriplets(arr, a, b, c) {", //            0
  "  let count = 0;", //                                       1
  "  for (let i = 0; i < arr.length; i++)", //                2
  "    for (let j = i + 1; j < arr.length; j++) {", //        3
  "      if (Math.abs(arr[i] - arr[j]) > a) continue;", //    4
  "      for (let k = j + 1; k < arr.length; k++) {", //      5
  "        if (Math.abs(arr[j] - arr[k]) <= b &&", //         6
  "            Math.abs(arr[i] - arr[k]) <= c)", //           7
  "          count++;", //                                     8
  "      }", //                                                9
  "    }", //                                                 10
  "  return count;", //                                       11
  "}", //                                                     12
];
