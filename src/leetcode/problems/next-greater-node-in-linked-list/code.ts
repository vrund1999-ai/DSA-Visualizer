export const CODE = [
  "function nextLargerNodes(vals) {", //                      0
  "  const ans = new Array(vals.length).fill(0);", //         1
  "  const stack = [];   // indices, values decreasing", //   2
  "  for (let i = 0; i < vals.length; i++) {", //             3
  "    while (stack.length &&", //                            4
  "           vals[stack.at(-1)] < vals[i]) {", //            5
  "      ans[stack.pop()] = vals[i];   // i answers them", // 6
  "    }", //                                                 7
  "    stack.push(i);", //                                    8
  "  }", //                                                   9
  "  return ans;   // leftover indices keep 0", //           10
  "}", //                                                    11
];
