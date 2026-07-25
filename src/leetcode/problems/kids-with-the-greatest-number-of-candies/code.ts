export const CODE = [
  "function kidsWithCandies(candies, extra) {", //            0
  "  const max = Math.max(...candies);", //                   1
  "  const result = [];", //                                  2
  "  for (const c of candies) {", //                          3
  "    result.push(c + extra >= max);", //                    4
  "  }", //                                                   5
  "  return result;", //                                      6
  "}", //                                                     7
];
