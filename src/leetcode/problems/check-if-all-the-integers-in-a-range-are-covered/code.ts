export const CODE = [
  "function isCovered(ranges, left, right) {", //             0
  "  for (let x = left; x <= right; x++) {", //               1
  "    let covered = false;", //                              2
  "    for (const [a, b] of ranges) {", //                    3
  "      if (a <= x && x <= b) { covered = true; break; }", //4
  "    }", //                                                 5
  "    if (!covered) return false;   // gap found", //        6
  "  }", //                                                   7
  "  return true;   // every integer covered", //            8
  "}", //                                                     9
];
