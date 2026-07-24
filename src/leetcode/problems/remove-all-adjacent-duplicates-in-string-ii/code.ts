export const CODE = [
  "function removeDuplicates(s, k) {", //                        0
  "  const stack = [];   // [char, count]", //                  1
  "  for (const c of s) {", //                                  2
  "    const top = stack.at(-1);", //                           3
  "    if (top && top[0] === c) top[1]++;", //                  4
  "    else stack.push([c, 1]);", //                            5
  "    if (stack.at(-1)[1] === k) stack.pop();   // remove", // 6
  "  }", //                                                     7
  "  return stack.map(([c, n]) => c.repeat(n)).join('');", //   8
  "}", //                                                       9
];
