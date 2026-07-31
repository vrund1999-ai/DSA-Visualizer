export const CODE = [
  "function maxDiff(num) {", //                               0
  "  const s = '' + num;", //                                 1
  "  // MAX: turn the first non-9 digit into 9", //           2
  "  let hi = s;", //                                         3
  "  for (const d of s)", //                                  4
  "    if (d !== '9') { hi = s.replaceAll(d, '9'); break; }", //5
  "  // MIN: leading digit -> 1, else first other -> 0", //   6
  "  let lo = s;", //                                         7
  "  if (s[0] !== '1') lo = s.replaceAll(s[0], '1');", //     8
  "  else for (let i = 1; i < s.length; i++)", //             9
  "    if (s[i] !== '0' && s[i] !== s[0]) {", //             10
  "      lo = s.replaceAll(s[i], '0'); break;", //           11
  "    }", //                                                12
  "  return +hi - +lo;", //                                  13
  "}", //                                                    14
];
