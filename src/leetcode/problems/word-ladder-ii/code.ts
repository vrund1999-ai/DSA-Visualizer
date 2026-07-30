export const CODE = [
  "function findLadders(begin, end, wordList) {", //          0
  "  const dict = new Set(wordList);", //                     1
  "  if (!dict.has(end)) return [];", //                      2
  "  let frontier = new Set([begin]);", //                    3
  "  const parents = new Map();        // child -> parents", //4
  "  const visited = new Set([begin]);", //                   5
  "  let found = false;", //                                  6
  "  while (frontier.size && !found) {", //                   7
  "    const next = new Set();", //                           8
  "    for (const w of frontier)", //                         9
  "      for (const c of dict)", //                          10
  "        if (!visited.has(c) && differ1(w, c)) {", //      11
  "          (parents.get(c) ?? parents.set(c, new Set())", //12
  "            .get(c)).add(w);", //                         13
  "          next.add(c);", //                               14
  "          if (c === end) found = true;", //               15
  "        }", //                                            16
  "    next.forEach(v => visited.add(v));", //               17
  "    frontier = next;", //                                 18
  "  }", //                                                  19
  "  return backtrack(end, parents, begin);", //             20
  "}", //                                                    21
];
