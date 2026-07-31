export const CODE = [
  "function longestCommonPrefix(arr1, arr2) {", //            0
  "  const prefixes = new Set();", //                         1
  "  for (const x of arr1) {", //                             2
  "    const s = '' + x;", //                                 3
  "    for (let i = 1; i <= s.length; i++)", //               4
  "      prefixes.add(s.slice(0, i));   // every prefix", //  5
  "  }", //                                                   6
  "  let best = 0;", //                                       7
  "  for (const y of arr2) {", //                             8
  "    const s = '' + y;", //                                 9
  "    for (let i = 1; i <= s.length; i++)", //              10
  "      if (prefixes.has(s.slice(0, i)))", //               11
  "        best = Math.max(best, i);", //                    12
  "  }", //                                                  13
  "  return best;", //                                       14
  "}", //                                                    15
];
