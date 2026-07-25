export const CODE = [
  "function minimumSize(nums, maxOperations) {", //           0
  "  let lo = 1, hi = Math.max(...nums);", //                 1
  "  const feasible = (penalty) => {", //                     2
  "    let ops = 0;", //                                      3
  "    for (const n of nums)", //                             4
  "      ops += Math.ceil(n / penalty) - 1;   // splits", //  5
  "    return ops <= maxOperations;", //                      6
  "  };", //                                                  7
  "  while (lo < hi) {", //                                   8
  "    const mid = (lo + hi) >> 1;", //                       9
  "    if (feasible(mid)) hi = mid;   // try smaller cap", // 10
  "    else lo = mid + 1;", //                               11
  "  }", //                                                  12
  "  return lo;", //                                         13
  "}", //                                                    14
];
