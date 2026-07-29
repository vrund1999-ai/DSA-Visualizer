export const CODE = [
  "function networkDelayTime(times, n, k) {", //              0
  "  const adj = buildAdj(times);", //                        1
  "  const dist = Array(n + 1).fill(Infinity);", //           2
  "  dist[k] = 0;", //                                        3
  "  const pq = new MinHeap([[0, k]]);", //                   4
  "  while (pq.size()) {", //                                 5
  "    const [d, u] = pq.pop();   // closest node", //        6
  "    if (d > dist[u]) continue;", //                        7
  "    for (const [v, w] of adj[u])", //                      8
  "      if (dist[u] + w < dist[v]) {", //                    9
  "        dist[v] = dist[u] + w;   // relax", //            10
  "        pq.push([dist[v], v]);", //                       11
  "      }", //                                              12
  "  }", //                                                  13
  "  const max = Math.max(...dist.slice(1));", //            14
  "  return max === Infinity ? -1 : max;", //                15
  "}", //                                                    16
];
