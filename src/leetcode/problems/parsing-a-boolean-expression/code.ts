export const CODE = [
  "function parseBoolExpr(expr) {", //                        0
  "  const stack = [];", //                                   1
  "  for (const c of expr) {", //                             2
  "    if (c === ',') continue;", //                          3
  "    if (c !== ')') { stack.push(c); continue; }", //       4
  "    const ops = [];", //                                   5
  "    while (stack.at(-1) !== '(')", //                      6
  "      ops.push(stack.pop());", //                          7
  "    stack.pop();               // drop '('", //            8
  "    const op = stack.pop();", //                           9
  "    stack.push(", //                                      10
  "      op === '!' ? (ops[0] === 't' ? 'f' : 't') :", //    11
  "      op === '&' ? (ops.every(x => x==='t')?'t':'f') :", //12
  "      (ops.some(x => x==='t') ? 't' : 'f'));", //         13
  "  }", //                                                  14
  "  return stack[0] === 't';", //                           15
  "}", //                                                    16
];
