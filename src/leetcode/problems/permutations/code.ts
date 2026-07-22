export const CODE = [
  "function permute(nums) {", //                            0
  "  const res = [], used = [];", //                        1
  "  function bt(cur) {", //                                2
  "    if (cur.length === nums.length) {", //               3
  "      res.push([...cur]); return;", //                   4
  "    }", //                                               5
  "    for (let i = 0; i < nums.length; i++) {", //         6
  "      if (used[i]) continue;", //                        7
  "      used[i] = true; cur.push(nums[i]);", //            8
  "      bt(cur);", //                                       9
  "      used[i] = false; cur.pop();   // backtrack", //   10
  "    }", //                                               11
  "  }", //                                                 12
  "  bt([]);", //                                           13
  "  return res;", //                                       14
  "}", //                                                   15
];
