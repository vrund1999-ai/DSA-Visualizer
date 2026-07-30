export const CODE = [
  "function findTheLongestSubstring(s) {", //                 0
  "  const first = new Map([[0, -1]]);   // mask -> index", //1
  "  let mask = 0, best = 0;", //                             2
  "  const V = 'aeiou';", //                                  3
  "  for (let i = 0; i < s.length; i++) {", //                4
  "    const b = V.indexOf(s[i]);", //                        5
  "    if (b >= 0) mask ^= (1 << b);   // toggle parity", //  6
  "    if (first.has(mask))   // seen before => even run", // 7
  "      best = Math.max(best, i - first.get(mask));", //     8
  "    else first.set(mask, i);", //                          9
  "  }", //                                                  10
  "  return best;", //                                       11
  "}", //                                                    12
];
