export const CODE = [
  "function smallestStringWithSwaps(s, pairs) {", //          0
  "  const parent = [...s].map((_, i) => i);", //             1
  "  const find = x => parent[x] === x", //                   2
  "    ? x : (parent[x] = find(parent[x]));", //              3
  "  for (const [a, b] of pairs)", //                         4
  "    parent[find(a)] = find(b);   // union", //             5
  "  const groups = new Map();", //                           6
  "  for (let i = 0; i < s.length; i++) {", //                7
  "    const r = find(i);", //                                8
  "    (groups.get(r) || groups.set(r, []).get(r)).push(i);", //9
  "  }", //                                                  10
  "  const res = [...s];", //                                11
  "  for (const idx of groups.values()) {", //               12
  "    const chars = idx.map(i => s[i]).sort();", //          13
  "    idx.forEach((i, k) => res[i] = chars[k]);", //        14
  "  }", //                                                  15
  "  return res.join('');", //                               16
  "}", //                                                    17
];
