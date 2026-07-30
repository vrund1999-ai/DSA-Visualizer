export const CODE = [
  "function findThePrefixCommonArray(A, B) {", //             0
  "  const count = {}, res = [];", //                         1
  "  let common = 0;", //                                     2
  "  for (let i = 0; i < A.length; i++) {", //                3
  "    count[A[i]] = (count[A[i]] || 0) + 1;", //             4
  "    if (count[A[i]] === 2) common++;   // in both", //     5
  "    count[B[i]] = (count[B[i]] || 0) + 1;", //             6
  "    if (count[B[i]] === 2) common++;", //                  7
  "    res.push(common);", //                                 8
  "  }", //                                                   9
  "  return res;", //                                        10
  "}", //                                                    11
];
