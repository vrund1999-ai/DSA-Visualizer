export const CODE = [
  "function findCircleNum(isConnected) {", //                       0
  "  const n = isConnected.length;", //                            1
  "  const parent = Array.from({length: n}, (_, i) => i);", //     2
  "  const find = x => parent[x] === x ? x", //                    3
  "    : (parent[x] = find(parent[x]));", //                       4
  "  for (let i = 0; i < n; i++)", //                              5
  "    for (let j = i + 1; j < n; j++)", //                        6
  "      if (isConnected[i][j])", //                               7
  "        parent[find(i)] = find(j);   // union", //              8
  "  let provinces = 0;", //                                       9
  "  for (let i = 0; i < n; i++)", //                              10
  "    if (find(i) === i) provinces++;   // roots", //             11
  "  return provinces;", //                                        12
  "}", //                                                          13
];
