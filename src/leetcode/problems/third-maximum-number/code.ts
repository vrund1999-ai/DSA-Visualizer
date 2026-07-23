export const CODE = [
  "function thirdMax(nums) {", //                                    0
  "  let a = -Infinity, b = -Infinity, c = -Infinity;", //         1
  "  for (const x of nums) {", //                                  2
  "    if (x === a || x === b || x === c) continue;   // skip", // 3
  "    if (x > a) [a, b, c] = [x, a, b];", //                      4
  "    else if (x > b) [b, c] = [x, b];", //                       5
  "    else if (x > c) c = x;", //                                 6
  "  }", //                                                        7
  "  return c > -Infinity ? c : a;   // 3rd or max", //            8
  "}", //                                                          9
];
