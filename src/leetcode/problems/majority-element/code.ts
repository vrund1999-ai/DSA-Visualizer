export const CODE = [
  "function majorityElement(nums) {", //             0
  "  let candidate = null, count = 0;", //           1
  "  for (const x of nums) {", //                    2
  "    if (count === 0) candidate = x;", //          3
  "    count += (x === candidate) ? 1 : -1;", //     4
  "  }", //                                          5
  "  return candidate;", //                          6
  "}", //                                            7
];
