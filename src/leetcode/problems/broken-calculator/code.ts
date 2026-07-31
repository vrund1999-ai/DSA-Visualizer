export const CODE = [
  "function brokenCalc(startValue, target) {", //             0
  "  let ops = 0;", //                                        1
  "  // work backwards from target to startValue", //         2
  "  while (target > startValue) {", //                       3
  "    ops++;", //                                            4
  "    if (target % 2 === 0) target /= 2;   // undo double", //5
  "    else target++;                       // undo -1", //   6
  "  }", //                                                   7
  "  return ops + (startValue - target);   // remaining -1s",//8
  "}", //                                                     9
];
