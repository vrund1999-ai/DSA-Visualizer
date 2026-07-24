export const CODE = [
  "function checkInclusion(s1, s2) {", //                     0
  "  if (s1.length > s2.length) return false;", //           1
  "  const need = count(s1), win = {};", //                   2
  "  const k = s1.length;", //                                3
  "  for (let i = 0; i < s2.length; i++) {", //               4
  "    win[s2[i]] = (win[s2[i]] ?? 0) + 1;   // add right", //5
  "    if (i >= k)", //                                       6
  "      win[s2[i-k]]--;   // drop left, keep size k", //     7
  "    if (sameCounts(win, need)) return true;", //           8
  "  }", //                                                   9
  "  return false;", //                                      10
  "}", //                                                    11
];
