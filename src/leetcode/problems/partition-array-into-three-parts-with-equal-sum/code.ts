export const CODE = [
  "function canThreePartsEqualSum(arr) {", //                 0
  "  const total = arr.reduce((a, b) => a + b, 0);", //       1
  "  if (total % 3 !== 0) return false;", //                  2
  "  const target = total / 3;", //                           3
  "  let acc = 0, parts = 0;", //                             4
  "  for (let i = 0; i < arr.length; i++) {", //              5
  "    acc += arr[i];", //                                    6
  "    if (acc === target) {", //                             7
  "      parts++;   // one part complete", //                 8
  "      acc = 0;", //                                        9
  "      if (parts === 3 && i < arr.length - 1)", //         10
  "        return true;   // rest can form 3rd", //          11
  "    }", //                                                12
  "  }", //                                                  13
  "  return parts >= 3;", //                                 14
  "}", //                                                    15
];
