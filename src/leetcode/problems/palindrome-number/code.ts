export const CODE = [
  "function isPalindrome(x) {", //                   0
  "  if (x < 0) return false;", //                   1
  "  const d = String(x).split('');", //             2
  "  let l = 0, r = d.length - 1;", //               3
  "  while (l < r) {", //                            4
  "    if (d[l] !== d[r]) return false;", //         5
  "    l++; r--;", //                                6
  "  }", //                                          7
  "  return true;", //                               8
  "}", //                                            9
];
