export const CODE = [
  "function getHappyString(n, k) {", //                       0
  "  const out = [];", //                                     1
  "  const dfs = cur => {", //                                2
  "    if (out.length >= k) return;   // enough already", //  3
  "    if (cur.length === n) { out.push(cur); return; }", //  4
  "    for (const ch of 'abc') {", //                         5
  "      if (cur[cur.length - 1] === ch) continue;  // no…", //6
  "      dfs(cur + ch);", //                                  7
  "    }", //                                                 8
  "  };", //                                                  9
  "  dfs('');", //                                           10
  "  return out.length >= k ? out[k - 1] : '';", //          11
  "}", //                                                    12
];
