export const CODE = [
  "function nextGreaterElement(n) {", //                      0
  "  const d = String(n).split('');", //                      1
  "  let i = d.length - 2;", //                               2
  "  while (i >= 0 && d[i] >= d[i + 1]) i--;  // pivot", //   3
  "  if (i < 0) return -1;   // already largest", //         4
  "  let j = d.length - 1;", //                               5
  "  while (d[j] <= d[i]) j--;   // next bigger digit", //   6
  "  [d[i], d[j]] = [d[j], d[i]];   // swap", //             7
  "  reverse(d, i + 1);   // sort the suffix ascending", //  8
  "  const val = Number(d.join(''));", //                     9
  "  return val <= 2**31 - 1 ? val : -1;", //                10
  "}", //                                                    11
];
