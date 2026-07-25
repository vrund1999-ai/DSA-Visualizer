export const CODE = [
  "function reverseStr(s, k) {", //                           0
  "  const a = s.split('');", //                              1
  "  for (let i = 0; i < a.length; i += 2 * k) {", //         2
  "    let l = i, r = Math.min(i + k - 1, a.length - 1);", // 3
  "    while (l < r) {", //                                   4
  "      [a[l], a[r]] = [a[r], a[l]];   // reverse first k",// 5
  "      l++; r--;", //                                       6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return a.join('');", //                                  9
  "}", //                                                    10
];
