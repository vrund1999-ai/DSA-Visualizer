export const CODE = [
  "function generateParenthesis(n) {", //                              0
  "  const res = [];", //                                             1
  "  function bt(cur, open, close) {", //                             2
  "    if (cur.length === 2 * n) { res.push(cur); return; }", //      3
  "    if (open < n) bt(cur + '(', open + 1, close);", //             4
  "    if (close < open) bt(cur + ')', open, close + 1);", //         5
  "  }", //                                                           6
  "  bt('', 0, 0);", //                                               7
  "  return res;", //                                                 8
  "}", //                                                             9
];
