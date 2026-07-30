export const CODE = [
  "function customSortString(order, s) {", //                 0
  "  const count = {};", //                                   1
  "  for (const c of s)", //                                  2
  "    count[c] = (count[c] || 0) + 1;", //                   3
  "  let res = '';", //                                       4
  "  for (const c of order)   // priority chars first", //    5
  "    while (count[c]-- > 0) res += c;", //                  6
  "  for (const c in count)   // leftovers", //               7
  "    while (count[c]-- > 0) res += c;", //                  8
  "  return res;", //                                         9
  "}", //                                                    10
];
