export const CODE = [
  "function nextBeautifulNumber(n) {", //                     0
  "  for (let x = n + 1; ; x++) {", //                        1
  "    const count = {};", //                                 2
  "    for (const d of String(x))", //                        3
  "      count[d] = (count[d] ?? 0) + 1;", //                 4
  "    const balanced = Object.entries(count)", //            5
  "      .every(([d, c]) => +d === c);   // d occurs d times", // 6
  "    if (balanced) return x;", //                           7
  "  }", //                                                   8
  "}", //                                                     9
];
