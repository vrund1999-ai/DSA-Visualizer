export const CODE = [
  "function canSeePersonsCount(heights) {", //                0
  "  const n = heights.length, res = Array(n).fill(0);", //   1
  "  const stack = [];   // decreasing heights", //           2
  "  for (let i = n - 1; i >= 0; i--) {", //                  3
  "    while (stack.length &&", //                            4
  "           stack[stack.length-1] < heights[i]) {", //      5
  "      stack.pop();   // shorter -> visible", //            6
  "      res[i]++;", //                                       7
  "    }", //                                                 8
  "    if (stack.length) res[i]++;   // the blocker", //      9
  "    stack.push(heights[i]);", //                          10
  "  }", //                                                  11
  "  return res;", //                                        12
  "}", //                                                    13
];
