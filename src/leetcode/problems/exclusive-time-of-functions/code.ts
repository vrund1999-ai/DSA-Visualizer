export const CODE = [
  "function exclusiveTime(n, logs) {", //                     0
  "  const res = Array(n).fill(0);", //                       1
  "  const stack = [];", //                                   2
  "  let prev = 0;", //                                       3
  "  for (const log of logs) {", //                           4
  "    const [id, type, t] = parse(log);", //                 5
  "    if (type === 'start') {", //                           6
  "      if (stack.length)", //                               7
  "        res[stack.at(-1)] += t - prev;", //                8
  "      stack.push(id);", //                                 9
  "      prev = t;", //                                      10
  "    } else {              // end", //                     11
  "      res[stack.pop()] += t - prev + 1;", //              12
  "      prev = t + 1;", //                                  13
  "    }", //                                                14
  "  }", //                                                  15
  "  return res;", //                                        16
  "}", //                                                    17
];
