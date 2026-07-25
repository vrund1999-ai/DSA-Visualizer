export const CODE = [
  "function unhappyFriends(n, preferences, pairs) {", //      0
  "  const rank = buildRank(preferences);", //                1
  "  const partner = [];", //                                 2
  "  for (const [a, b] of pairs) {", //                       3
  "    partner[a] = b; partner[b] = a;", //                   4
  "  }", //                                                   5
  "  let unhappy = 0;", //                                    6
  "  for (let x = 0; x < n; x++) {", //                       7
  "    const y = partner[x];", //                             8
  "    for (const u of preferences[x]) {", //                 9
  "      if (u === y) break;   // x already prefers y most", // 10
  "      const v = partner[u];", //                          11
  "      if (rank[u][x] < rank[u][v]) {", //                 12
  "        unhappy++; break;   // mutual preference", //     13
  "      }", //                                              14
  "    }", //                                                15
  "  }", //                                                  16
  "  return unhappy;", //                                    17
  "}", //                                                    18
];
