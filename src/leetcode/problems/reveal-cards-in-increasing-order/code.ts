export const CODE = [
  "function deckRevealedIncreasing(deck) {", //               0
  "  deck.sort((a, b) => a - b);", //                         1
  "  const n = deck.length;", //                              2
  "  const idx = [...Array(n).keys()];   // position queue", //3
  "  const res = Array(n);", //                               4
  "  for (const card of deck) {", //                          5
  "    const pos = idx.shift();   // reveal slot", //         6
  "    res[pos] = card;", //                                  7
  "    if (idx.length)", //                                   8
  "      idx.push(idx.shift());   // next goes to bottom", // 9
  "  }", //                                                  10
  "  return res;", //                                        11
  "}", //                                                    12
];
