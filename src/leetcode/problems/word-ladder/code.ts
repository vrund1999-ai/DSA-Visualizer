export const CODE = [
  "function ladderLength(begin, end, wordList) {", //         0
  "  const dict = new Set(wordList);", //                     1
  "  if (!dict.has(end)) return 0;", //                       2
  "  let queue = [begin], level = 1;", //                     3
  "  const seen = new Set([begin]);", //                      4
  "  while (queue.length) {", //                              5
  "    const next = [];", //                                  6
  "    for (const word of queue) {", //                       7
  "      if (word === end) return level;", //                 8
  "      for (const w of neighbors(word, dict)) {", //        9
  "        if (!seen.has(w)) { seen.add(w); next.push(w); }",//10
  "      }", //                                               11
  "    }", //                                                 12
  "    queue = next; level++;", //                            13
  "  }", //                                                   14
  "  return 0;   // no transformation", //                    15
  "}", //                                                     16
];
