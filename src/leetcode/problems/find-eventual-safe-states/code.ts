export const CODE = [
  "function eventualSafeNodes(graph) {", //                   0
  "  const color = new Array(graph.length).fill(0);", //      1
  "  // 0 = unvisited, 1 = visiting, 2 = safe", //            2
  "  const dfs = (u) => {", //                                3
  "    if (color[u] > 0) return color[u] === 2;", //          4
  "    color[u] = 1;   // on the current path", //            5
  "    for (const v of graph[u])", //                         6
  "      if (!dfs(v)) return false;   // leads to a cycle", //7
  "    color[u] = 2;   // all paths safe", //                 8
  "    return true;", //                                      9
  "  };", //                                                 10
  "  return graph.map((_, u) => u)", //                      11
  "    .filter(dfs);", //                                    12
  "}", //                                                    13
];
