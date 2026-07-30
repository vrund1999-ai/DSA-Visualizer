export const CODE = [
  "function addOperators(num, target) {", //                  0
  "  const res = [];", //                                     1
  "  const dfs = (i, expr, calc, prev) => {", //              2
  "    if (i === num.length) {", //                           3
  "      if (calc === target) res.push(expr);", //            4
  "      return;", //                                         5
  "    }", //                                                 6
  "    for (let j = i; j < num.length; j++) {", //            7
  "      const s = num.slice(i, j + 1);", //                  8
  "      if (s.length > 1 && s[0] === '0') break;  // no 0…",//9
  "      const cur = Number(s);", //                         10
  "      if (i === 0) dfs(j+1, s, cur, cur);", //            11
  "      else {", //                                         12
  "        dfs(j+1, expr+'+'+s, calc+cur, cur);", //         13
  "        dfs(j+1, expr+'-'+s, calc-cur, -cur);", //        14
  "        dfs(j+1, expr+'*'+s, calc-prev+prev*cur, prev*cur);",//15
  "      }", //                                              16
  "    }", //                                                17
  "  };", //                                                 18
  "  dfs(0, '', 0, 0);", //                                  19
  "  return res;", //                                        20
  "}", //                                                    21
];
