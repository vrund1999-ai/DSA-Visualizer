export const CODE = [
  "function isNStraightHand(hand, groupSize) {", //           0
  "  if (hand.length % groupSize !== 0) return false;", //    1
  "  const count = new Map();", //                            2
  "  for (const c of hand)", //                               3
  "    count.set(c, (count.get(c) ?? 0) + 1);", //            4
  "  for (const card of [...count.keys()].sort((a,b)=>a-b)) {", // 5
  "    const need = count.get(card);", //                     6
  "    if (need <= 0) continue;", //                          7
  "    for (let x = card; x < card + groupSize; x++) {", //   8
  "      if ((count.get(x) ?? 0) < need) return false;", //   9
  "      count.set(x, count.get(x) - need);   // consume", // 10
  "    }", //                                                11
  "  }", //                                                  12
  "  return true;", //                                       13
  "}", //                                                    14
];
