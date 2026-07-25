export const CODE = [
  "function diffWaysToCompute(expr) {", //                    0
  "  if (/^\\d+$/.test(expr)) return [+expr];   // number", //1
  "  const res = [];", //                                     2
  "  for (let i = 0; i < expr.length; i++) {", //             3
  "    const c = expr[i];", //                                4
  "    if ('+-*'.includes(c)) {", //                          5
  "      const left  = diffWaysToCompute(expr.slice(0, i));",//6
  "      const right = diffWaysToCompute(expr.slice(i + 1));",//7
  "      for (const a of left)", //                           8
  "        for (const b of right)", //                        9
  "          res.push(apply(c, a, b));   // combine", //     10
  "    }", //                                                11
  "  }", //                                                  12
  "  return res;", //                                        13
  "}", //                                                    14
];
