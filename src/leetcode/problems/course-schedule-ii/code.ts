export const CODE = [
  "function findOrder(numCourses, prerequisites) {", //       0
  "  const adj = Array.from({length: numCourses}, () => []);",//1
  "  const indeg = new Array(numCourses).fill(0);", //        2
  "  for (const [a, b] of prerequisites) {", //               3
  "    adj[b].push(a); indeg[a]++;   // b -> a", //           4
  "  }", //                                                   5
  "  const q = [];", //                                       6
  "  for (let i = 0; i < numCourses; i++)", //                7
  "    if (indeg[i] === 0) q.push(i);   // no prereqs", //    8
  "  const order = [];", //                                   9
  "  while (q.length) {", //                                  10
  "    const c = q.shift();", //                              11
  "    order.push(c);", //                                    12
  "    for (const nxt of adj[c])", //                         13
  "      if (--indeg[nxt] === 0) q.push(nxt);", //            14
  "  }", //                                                   15
  "  return order.length === numCourses ? order : [];", //   16
  "}", //                                                     17
];
