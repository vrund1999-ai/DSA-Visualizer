export const CODE = [
  "function wordPattern(pattern, s) {", //                       0
  "  const words = s.split(' ');", //                           1
  "  if (words.length !== pattern.length) return false;", //    2
  "  const p2w = {}, w2p = {};", //                             3
  "  for (let i = 0; i < pattern.length; i++) {", //            4
  "    const c = pattern[i], w = words[i];", //                 5
  "    if (p2w[c] === undefined && w2p[w] === undefined) {", // 6
  "      p2w[c] = w; w2p[w] = c;", //                           7
  "    } else if (p2w[c] !== w || w2p[w] !== c)", //            8
  "      return false;", //                                     9
  "  }", //                                                     10
  "  return true;", //                                          11
  "}", //                                                       12
];
