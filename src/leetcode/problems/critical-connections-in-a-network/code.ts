export const CODE = [
  "function criticalConnections(n, connections) {", //        0
  "  const g = buildAdj(n, connections);", //                 1
  "  const disc = Array(n).fill(-1), low = Array(n).fill(0);", // 2
  "  const bridges = []; let timer = 0;", //                  3
  "  const dfs = (u, parent) => {", //                        4
  "    disc[u] = low[u] = timer++;", //                       5
  "    for (const v of g[u]) {", //                           6
  "      if (v === parent) continue;", //                     7
  "      if (disc[v] === -1) {", //                           8
  "        dfs(v, u);", //                                     9
  "        low[u] = Math.min(low[u], low[v]);", //           10
  "        if (low[v] > disc[u]) bridges.push([u, v]);", //  11
  "      } else low[u] = Math.min(low[u], disc[v]);", //     12
  "    }", //                                                13
  "  };", //                                                 14
  "  dfs(0, -1);", //                                        15
  "  return bridges;", //                                    16
  "}", //                                                    17
];
