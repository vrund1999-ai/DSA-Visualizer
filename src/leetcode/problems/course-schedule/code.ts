export const CODE = [
  "function canFinish(n, prerequisites) {", //                             0
  "  const adj = Array.from({length: n}, () => []);", //                   1
  "  const indeg = Array(n).fill(0);", //                                  2
  "  for (const [a, b] of prerequisites) {", //                           3
  "    adj[b].push(a); indeg[a]++;   // b must come before a", //         4
  "  }", //                                                               5
  "  const queue = [];", //                                               6
  "  for (let i = 0; i < n; i++) if (indeg[i] === 0) queue.push(i);", //  7
  "  let done = 0;", //                                                   8
  "  while (queue.length) {", //                                          9
  "    const node = queue.shift(); done++;", //                          10
  "    for (const next of adj[node])", //                                11
  "      if (--indeg[next] === 0) queue.push(next);", //                 12
  "  }", //                                                               13
  "  return done === n;   // all courses ordered?", //                   14
  "}", //                                                                 15
];
