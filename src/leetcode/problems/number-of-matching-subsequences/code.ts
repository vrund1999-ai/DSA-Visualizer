export const CODE = [
  "function numMatchingSubseq(s, words) {", //                0
  "  const waiting = new Map();   // nextChar -> [it...]", // 1
  "  for (const w of words)", //                              2
  "    push(waiting, w[0], { w, i: 0 });", //                 3
  "  let count = 0;", //                                      4
  "  for (const c of s) {", //                                5
  "    const advancing = waiting.get(c) ?? [];", //           6
  "    waiting.set(c, []);", //                               7
  "    for (const it of advancing) {", //                     8
  "      it.i++;", //                                         9
  "      if (it.i === it.w.length) count++;   // matched", // 10
  "      else push(waiting, it.w[it.i], it);", //            11
  "    }", //                                                12
  "  }", //                                                  13
  "  return count;", //                                      14
  "}", //                                                    15
];
