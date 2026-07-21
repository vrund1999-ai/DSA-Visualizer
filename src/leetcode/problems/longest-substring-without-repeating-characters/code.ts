export const CODE = [
  "function lengthOfLongestSubstring(s) {", //                0
  "  const seen = new Set();", //                             1
  "  let left = 0, best = 0;", //                             2
  "  for (let right = 0; right < s.length; right++) {", //    3
  "    while (seen.has(s[right])) {", //                      4
  "      seen.delete(s[left]);", //                           5
  "      left++;", //                                         6
  "    }", //                                                 7
  "    seen.add(s[right]);", //                               8
  "    best = Math.max(best, right - left + 1);", //          9
  "  }", //                                                   10
  "  return best;", //                                        11
  "}", //                                                     12
];
