export const CODE = [
  "function sumFourDivisors(nums) {", //                      0
  "  let total = 0;", //                                      1
  "  for (const n of nums) {", //                             2
  "    const divs = new Set([1, n]);", //                     3
  "    for (let d = 2; d * d <= n; d++)", //                  4
  "      if (n % d === 0) { divs.add(d); divs.add(n / d); }", // 5
  "    if (divs.size === 4)", //                              6
  "      total += [...divs].reduce((a, b) => a + b, 0);", //  7
  "  }", //                                                   8
  "  return total;", //                                       9
  "}", //                                                    10
];
