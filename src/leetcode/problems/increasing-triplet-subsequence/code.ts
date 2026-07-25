export const CODE = [
  "function increasingTriplet(nums) {", //                    0
  "  let first = Infinity, second = Infinity;", //            1
  "  for (const n of nums) {", //                             2
  "    if (n <= first) first = n;         // smallest", //    3
  "    else if (n <= second) second = n;  // 2nd smallest",// 4
  "    else return true;   // n > first and second", //       5
  "  }", //                                                   6
  "  return false;", //                                       7
  "}", //                                                     8
];
