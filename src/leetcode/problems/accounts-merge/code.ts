export const CODE = [
  "function accountsMerge(accounts) {", //                    0
  "  const parent = {};   // email -> email (DSU)", //        1
  "  const owner  = {};   // email -> name", //               2
  "  const find = e => parent[e] === e", //                   3
  "    ? e : (parent[e] = find(parent[e]));", //              4
  "  for (const [name, ...emails] of accounts) {", //         5
  "    for (const e of emails) {", //                         6
  "      parent[e] ??= e; owner[e] = name;", //               7
  "      union(emails[0], e);   // same account", //          8
  "    }", //                                                 9
  "  }", //                                                  10
  "  // group emails by their DSU root", //                  11
  "  return buildGroups(parent, owner, find);", //           12
  "}", //                                                    13
];
