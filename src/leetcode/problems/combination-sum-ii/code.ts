export const CODE = [
  "function combinationSum2(candidates, target) {", //        0
  "  candidates.sort((a, b) => a - b);", //                   1
  "  const res = [], path = [];", //                          2
  "  (function backtrack(start, remain) {", //                3
  "    if (remain === 0) { res.push([...path]); return; }", //4
  "    for (let i = start; i < candidates.length; i++) {", // 5
  "      if (i > start && candidates[i] === candidates[i-1])",//6
  "        continue;   // skip duplicate at this level", //   7
  "      if (candidates[i] > remain) break;   // sorted", //  8
  "      path.push(candidates[i]);", //                       9
  "      backtrack(i + 1, remain - candidates[i]);", //       10
  "      path.pop();   // undo", //                           11
  "    }", //                                                 12
  "  })(0, target);", //                                      13
  "  return res;", //                                         14
  "}", //                                                     15
];
