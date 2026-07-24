export const CODE = [
  "function minWindow(s, t) {", //                            0
  "  const need = new Map();", //                             1
  "  for (const c of t) need.set(c, (need.get(c)??0)+1);", // 2
  "  let missing = t.length, lo = 0, best = '';", //          3
  "  for (let hi = 0; hi < s.length; hi++) {", //             4
  "    if (need.get(s[hi]) > 0) missing--;", //               5
  "    need.set(s[hi], (need.get(s[hi])??0) - 1);", //        6
  "    while (missing === 0) {   // window has all of t", //  7
  "      if (!best || hi - lo + 1 < best.length)", //         8
  "        best = s.slice(lo, hi + 1);", //                   9
  "      need.set(s[lo], need.get(s[lo]) + 1);", //          10
  "      if (need.get(s[lo]) > 0) missing++;", //            11
  "      lo++;", //                                          12
  "    }", //                                                13
  "  }", //                                                  14
  "  return best;", //                                       15
  "}", //                                                    16
];
