export const CODE = [
  "function nextGreaterElements(nums) {", //                  0
  "  const n = nums.length;", //                              1
  "  const res = new Array(n).fill(-1);", //                  2
  "  const stack = [];   // indices, values decreasing", //   3
  "  for (let i = 0; i < 2 * n; i++) {", //                   4
  "    const cur = nums[i % n];", //                          5
  "    while (stack.length &&", //                            6
  "           nums[stack[stack.length - 1]] < cur) {", //     7
  "      res[stack.pop()] = cur;   // cur is the answer", //  8
  "    }", //                                                 9
  "    if (i < n) stack.push(i);", //                         10
  "  }", //                                                   11
  "  return res;", //                                         12
  "}", //                                                     13
];
