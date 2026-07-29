export const CODE = [
  "function nextGreatestLetter(letters, target) {", //        0
  "  let lo = 0, hi = letters.length;", //                    1
  "  while (lo < hi) {", //                                   2
  "    const mid = (lo + hi) >> 1;", //                       3
  "    if (letters[mid] <= target)", //                       4
  "      lo = mid + 1;   // need strictly greater", //        5
  "    else", //                                              6
  "      hi = mid;", //                                       7
  "  }", //                                                   8
  "  return letters[lo % letters.length];   // wrap", //      9
  "}", //                                                    10
];
