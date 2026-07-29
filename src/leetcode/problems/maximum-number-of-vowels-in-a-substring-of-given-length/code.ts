export const CODE = [
  "function maxVowels(s, k) {", //                            0
  "  const isV = c => 'aeiou'.includes(c);", //               1
  "  let cur = 0;", //                                        2
  "  for (let i = 0; i < k; i++)   // first window", //       3
  "    if (isV(s[i])) cur++;", //                             4
  "  let best = cur;", //                                     5
  "  for (let i = k; i < s.length; i++) {", //                6
  "    if (isV(s[i])) cur++;        // enter right", //       7
  "    if (isV(s[i - k])) cur--;    // exit left", //         8
  "    best = Math.max(best, cur);", //                       9
  "  }", //                                                  10
  "  return best;", //                                       11
  "}", //                                                    12
];
