export const CODE = [
  "function combinationSum(candidates, target) {", //           0
  "  const res = [];", //                                       1
  "  function bt(start, remain, cur) {", //                     2
  "    if (remain === 0) { res.push([...cur]); return; }", //   3
  "    if (remain < 0) return;", //                             4
  "    for (let i = start; i < candidates.length; i++) {", //   5
  "      cur.push(candidates[i]);", //                          6
  "      bt(i, remain - candidates[i], cur);  // reuse i", //   7
  "      cur.pop();                            // backtrack", //8
  "    }", //                                                   9
  "  }", //                                                     10
  "  bt(0, target, []);", //                                    11
  "  return res;", //                                           12
  "}", //                                                       13
];
