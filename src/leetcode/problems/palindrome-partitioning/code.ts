export const CODE = [
  "function partition(s) {", //                                     0
  "  const res = [], cur = [];", //                                1
  "  function bt(start) {", //                                     2
  "    if (start === s.length) { res.push([...cur]); return; }", //3
  "    for (let end = start + 1; end <= s.length; end++) {", //    4
  "      const piece = s.slice(start, end);", //                   5
  "      if (isPalindrome(piece)) {", //                           6
  "        cur.push(piece);", //                                   7
  "        bt(end);", //                                           8
  "        cur.pop();          // backtrack", //                   9
  "      }", //                                                    10
  "    }", //                                                      11
  "  }", //                                                        12
  "  bt(0);", //                                                   13
  "  return res;", //                                              14
  "}", //                                                          15
];
