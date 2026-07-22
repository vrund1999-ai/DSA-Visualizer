export const CODE = [
  "function characterReplacement(s, k) {", //                     0
  "  const count = {}; let left = 0, maxFreq = 0, best = 0;", //  1
  "  for (let right = 0; right < s.length; right++) {", //        2
  "    count[s[right]] = (count[s[right]] || 0) + 1;", //         3
  "    maxFreq = Math.max(maxFreq, count[s[right]]);", //         4
  "    while (right - left + 1 - maxFreq > k) {", //              5
  "      count[s[left]]--; left++;   // shrink", //               6
  "    }", //                                                     7
  "    best = Math.max(best, right - left + 1);", //              8
  "  }", //                                                       9
  "  return best;", //                                            10
  "}", //                                                         11
];
