export const CODE = [
  "function isBipartite(graph) {", //                         0
  "  const color = Array(graph.length).fill(0);", //          1
  "  for (let s = 0; s < graph.length; s++) {", //            2
  "    if (color[s]) continue;", //                           3
  "    const queue = [s]; color[s] = 1;", //                  4
  "    while (queue.length) {", //                            5
  "      const u = queue.shift();", //                        6
  "      for (const v of graph[u]) {", //                     7
  "        if (color[v] === 0) {", //                         8
  "          color[v] = -color[u];   // opposite", //         9
  "          queue.push(v);", //                             10
  "        } else if (color[v] === color[u])", //            11
  "          return false;   // same-color edge", //         12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return true;", //                                       16
  "}", //                                                    17
];
