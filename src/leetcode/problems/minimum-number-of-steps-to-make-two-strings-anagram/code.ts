export const CODE = [
  "function minSteps(s, t) {", //                             0
  "  const count = new Array(26).fill(0);", //                1
  "  for (const ch of s)", //                                 2
  "    count[ch.charCodeAt(0) - 97]++;   // s adds", //       3
  "  for (const ch of t)", //                                 4
  "    count[ch.charCodeAt(0) - 97]--;   // t removes", //    5
  "  let steps = 0;", //                                      6
  "  for (const c of count)", //                              7
  "    if (c > 0) steps += c;   // surplus in s", //         8
  "  return steps;", //                                       9
  "}", //                                                     10
];
