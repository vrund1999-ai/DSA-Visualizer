export const CODE = [
  "function shortestToChar(s, c) {", //                       0
  "  const n = s.length, ans = Array(n).fill(Infinity);", //  1
  "  let prev = -Infinity;", //                               2
  "  for (let i = 0; i < n; i++) {   // left -> right", //    3
  "    if (s[i] === c) prev = i;", //                         4
  "    ans[i] = Math.abs(i - prev);", //                      5
  "  }", //                                                   6
  "  prev = Infinity;", //                                    7
  "  for (let i = n - 1; i >= 0; i--) {   // right -> left", //8
  "    if (s[i] === c) prev = i;", //                         9
  "    ans[i] = Math.min(ans[i], Math.abs(i - prev));", //   10
  "  }", //                                                  11
  "  return ans;", //                                        12
  "}", //                                                    13
];
