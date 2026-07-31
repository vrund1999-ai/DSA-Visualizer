export const CODE = [
  "function fairCandySwap(alice, bob) {", //                  0
  "  const sumA = alice.reduce((a, b) => a + b, 0);", //      1
  "  const sumB = bob.reduce((a, b) => a + b, 0);", //        2
  "  const delta = (sumA - sumB) / 2;", //                    3
  "  const bobSet = new Set(bob);", //                        4
  "  for (const a of alice) {", //                            5
  "    // give a, take (a - delta): sums become equal", //    6
  "    if (bobSet.has(a - delta))", //                        7
  "      return [a, a - delta];", //                          8
  "  }", //                                                   9
  "}", //                                                    10
];
