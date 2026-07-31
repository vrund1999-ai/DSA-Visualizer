export const CODE = [
  "function maxScoreWords(words, letters, score) {", //       0
  "  const avail = Array(26).fill(0);", //                    1
  "  for (const c of letters) avail[c.charCodeAt(0)-97]++;", //2
  "  const wordScore = w => [...w]", //                       3
  "    .reduce((s, c) => s + score[c.charCodeAt(0)-97], 0);", //4
  "  const dfs = i => {", //                                  5
  "    if (i === words.length) return 0;", //                 6
  "    let best = dfs(i + 1);          // skip word i", //     7
  "    if (canUse(words[i], avail)) {", //                    8
  "      apply(words[i], avail, -1);   // take word i", //     9
  "      best = Math.max(best,", //                          10
  "        wordScore(words[i]) + dfs(i + 1));", //           11
  "      apply(words[i], avail, +1);   // backtrack", //     12
  "    }", //                                                13
  "    return best;", //                                     14
  "  };", //                                                 15
  "  return dfs(0);", //                                     16
  "}", //                                                    17
];
