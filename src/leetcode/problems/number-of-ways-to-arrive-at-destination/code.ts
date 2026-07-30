export const CODE = [
  "function countPaths(n, roads) {", //                       0
  "  const adj = buildAdj(roads);", //                        1
  "  const dist = Array(n).fill(Infinity);", //               2
  "  const ways = Array(n).fill(0);", //                      3
  "  dist[0] = 0; ways[0] = 1;", //                           4
  "  const pq = new MinHeap([[0, 0]]);", //                   5
  "  while (pq.size()) {", //                                 6
  "    const [d, u] = pq.pop();", //                          7
  "    if (d > dist[u]) continue;", //                        8
  "    for (const [v, w] of adj[u]) {", //                    9
  "      if (d + w < dist[v]) {   // shorter path", //       10
  "        dist[v] = d + w;", //                             11
  "        ways[v] = ways[u];", //                           12
  "        pq.push([dist[v], v]);", //                       13
  "      } else if (d + w === dist[v])   // tie", //         14
  "        ways[v] = (ways[v] + ways[u]) % MOD;", //         15
  "    }", //                                                16
  "  }", //                                                  17
  "  return ways[n - 1];", //                                18
  "}", //                                                    19
];
