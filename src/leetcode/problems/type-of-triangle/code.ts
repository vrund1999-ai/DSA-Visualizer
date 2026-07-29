export const CODE = [
  "function triangleType(nums) {", //                         0
  "  const [a, b, c] = [...nums].sort((x, y) => x - y);", //  1
  "  if (a + b <= c) return 'none';   // degenerate", //      2
  "  if (a === b && b === c) return 'equilateral';", //       3
  "  if (a === b || b === c) return 'isosceles';", //         4
  "  return 'scalene';", //                                   5
  "}", //                                                     6
];
