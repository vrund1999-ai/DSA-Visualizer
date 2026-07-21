export const CODE = [
  "function subsets(nums) {", //                            0
  "  const res = [];", //                                   1
  "  function bt(start, cur) {", //                         2
  "    res.push([...cur]);", //                             3
  "    for (let i = start; i < nums.length; i++) {", //     4
  "      cur.push(nums[i]);       // include", //           5
  "      bt(i + 1, cur);", //                               6
  "      cur.pop();               // backtrack", //         7
  "    }", //                                               8
  "  }", //                                                 9
  "  bt(0, []);", //                                        10
  "  return res;", //                                       11
  "}", //                                                   12
];
