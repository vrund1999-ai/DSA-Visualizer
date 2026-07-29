export const CODE = [
  "function minOperations(boxes) {", //                       0
  "  const n = boxes.length, ans = Array(n).fill(0);", //     1
  "  let count = 0, ops = 0;", //                             2
  "  for (let i = 0; i < n; i++) {   // sweep right", //      3
  "    ans[i] += ops;", //                                    4
  "    count += boxes[i] === '1' ? 1 : 0;", //                5
  "    ops += count;", //                                     6
  "  }", //                                                   7
  "  count = 0; ops = 0;", //                                 8
  "  for (let i = n - 1; i >= 0; i--) {   // sweep left", //  9
  "    ans[i] += ops;", //                                   10
  "    count += boxes[i] === '1' ? 1 : 0;", //               11
  "    ops += count;", //                                    12
  "  }", //                                                  13
  "  return ans;", //                                        14
  "}", //                                                    15
];
