export const CODE = [
  "function wordBreak(s, wordDict) {", //                     0
  "  const words = new Set(wordDict);", //                    1
  "  const memo = new Map();", //                             2
  "  function solve(start) {", //                             3
  "    if (start === s.length) return [''];", //              4
  "    if (memo.has(start)) return memo.get(start);", //      5
  "    const res = [];", //                                   6
  "    for (let end = start + 1; end <= s.length; end++) {", //7
  "      const w = s.slice(start, end);", //                  8
  "      if (words.has(w))", //                               9
  "        for (const rest of solve(end))", //               10
  "          res.push(rest ? w + ' ' + rest : w);", //       11
  "    }", //                                                12
  "    memo.set(start, res);", //                            13
  "    return res;", //                                      14
  "  }", //                                                  15
  "  return solve(0);", //                                   16
  "}", //                                                    17
];
