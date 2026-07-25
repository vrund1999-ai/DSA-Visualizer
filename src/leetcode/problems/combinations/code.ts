export const CODE = [
  "function combine(n, k) {", //                              0
  "  const res = [], path = [];", //                          1
  "  (function backtrack(start) {", //                        2
  "    if (path.length === k) {", //                          3
  "      res.push([...path]); return;", //                    4
  "    }", //                                                 5
  "    for (let i = start; i <= n; i++) {", //                6
  "      path.push(i);", //                                   7
  "      backtrack(i + 1);   // only larger numbers", //      8
  "      path.pop();         // undo", //                     9
  "    }", //                                                10
  "  })(1);", //                                             11
  "  return res;", //                                        12
  "}", //                                                    13
];
