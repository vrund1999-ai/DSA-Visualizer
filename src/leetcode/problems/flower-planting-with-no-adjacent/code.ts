export const CODE = [
  "function gardenNoAdj(n, paths) {", //                      0
  "  const adj = Array.from({length: n+1}, () => []);", //    1
  "  for (const [a, b] of paths) {", //                       2
  "    adj[a].push(b); adj[b].push(a);", //                   3
  "  }", //                                                   4
  "  const color = Array(n + 1).fill(0);", //                 5
  "  for (let g = 1; g <= n; g++) {", //                      6
  "    const used = new Set(adj[g].map(x => color[x]));", //  7
  "    for (let c = 1; c <= 4; c++)", //                      8
  "      if (!used.has(c)) { color[g] = c; break; }", //      9
  "  }", //                                                  10
  "  return color.slice(1);", //                             11
  "}", //                                                    12
];
