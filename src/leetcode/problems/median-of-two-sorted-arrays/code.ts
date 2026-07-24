export const CODE = [
  "function findMedianSortedArrays(a, b) {", //                     0
  "  if (a.length > b.length) [a, b] = [b, a];   // a shorter", // 1
  "  const m = a.length, n = b.length, half = (m + n + 1) >> 1;",// 2
  "  let lo = 0, hi = m;", //                                      3
  "  while (lo <= hi) {", //                                       4
  "    const i = (lo + hi) >> 1, j = half - i;", //                5
  "    const aL = i ? a[i-1] : -Inf, aR = i<m ? a[i] : Inf;", //   6
  "    const bL = j ? b[j-1] : -Inf, bR = j<n ? b[j] : Inf;", //   7
  "    if (aL <= bR && bL <= aR) return median(aL,aR,bL,bR);", //  8
  "    else if (aL > bR) hi = i - 1;   // move left", //           9
  "    else lo = i + 1;                // move right", //          10
  "  }", //                                                        11
  "}", //                                                          12
];
