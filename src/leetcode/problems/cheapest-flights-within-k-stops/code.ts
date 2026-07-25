export const CODE = [
  "function findCheapestPrice(n, flights, src, dst, k) {", // 0
  "  let dist = Array(n).fill(Infinity);", //                 1
  "  dist[src] = 0;", //                                      2
  "  for (let i = 0; i <= k; i++) {", //                      3
  "    const tmp = [...dist];   // snapshot: ≤ i+1 stops", // 4
  "    for (const [u, v, w] of flights)", //                  5
  "      if (dist[u] + w < tmp[v])", //                       6
  "        tmp[v] = dist[u] + w;   // relax edge", //         7
  "    dist = tmp;", //                                       8
  "  }", //                                                   9
  "  return dist[dst] === Infinity ? -1 : dist[dst];", //    10
  "}", //                                                    11
];
