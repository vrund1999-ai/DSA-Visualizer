export const CODE = [
  "function intervalIntersection(A, B) {", //                 0
  "  const res = [];", //                                     1
  "  let i = 0, j = 0;", //                                   2
  "  while (i < A.length && j < B.length) {", //              3
  "    const lo = Math.max(A[i][0], B[j][0]);", //            4
  "    const hi = Math.min(A[i][1], B[j][1]);", //            5
  "    if (lo <= hi) res.push([lo, hi]);   // overlap", //    6
  "    if (A[i][1] < B[j][1]) i++;   // A ends first", //     7
  "    else j++;   // B ends first", //                       8
  "  }", //                                                   9
  "  return res;", //                                        10
  "}", //                                                    11
];
