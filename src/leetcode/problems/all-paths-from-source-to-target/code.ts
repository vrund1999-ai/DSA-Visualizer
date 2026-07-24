export const CODE = [
  "function allPathsSourceTarget(graph) {", //                      0
  "  const res = [], target = graph.length - 1;", //              1
  "  function bt(node, path) {", //                               2
  "    if (node === target) { res.push([...path]); return; }", // 3
  "    for (const next of graph[node]) {", //                     4
  "      path.push(next);", //                                    5
  "      bt(next, path);", //                                     6
  "      path.pop();          // backtrack", //                   7
  "    }", //                                                     8
  "  }", //                                                       9
  "  bt(0, [0]);", //                                             10
  "  return res;", //                                             11
  "}", //                                                         12
];
