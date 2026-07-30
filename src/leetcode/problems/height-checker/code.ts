export const CODE = [
  "function heightChecker(heights) {", //                     0
  "  const expected = [...heights]", //                       1
  "    .sort((a, b) => a - b);", //                           2
  "  let count = 0;", //                                       3
  "  for (let i = 0; i < heights.length; i++)", //            4
  "    if (heights[i] !== expected[i])", //                   5
  "      count++;   // out of order", //                      6
  "  return count;", //                                       7
  "}", //                                                     8
];
