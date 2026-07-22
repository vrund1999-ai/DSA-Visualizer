export const CODE = [
  "function dailyTemperatures(temps) {", //                       0
  "  const res = new Array(temps.length).fill(0);", //           1
  "  const stack = [];   // indices, decreasing temps", //       2
  "  for (let i = 0; i < temps.length; i++) {", //               3
  "    while (stack.length &&", //                               4
  "        temps[i] > temps[stack.at(-1)]) {", //                5
  "      const j = stack.pop();", //                             6
  "      res[j] = i - j;", //                                    7
  "    }", //                                                    8
  "    stack.push(i);", //                                       9
  "  }", //                                                      10
  "  return res;", //                                            11
  "}", //                                                        12
];
