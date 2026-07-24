export const CODE = [
  "function invalidTransactions(transactions) {", //               0
  "  const t = transactions.map(parse);", //                      1
  "  const bad = new Set();", //                                  2
  "  for (let i = 0; i < t.length; i++) {", //                    3
  "    if (t[i].amount > 1000) bad.add(i);   // rule 1", //       4
  "    for (let j = i + 1; j < t.length; j++)", //                5
  "      if (t[i].name === t[j].name &&", //                      6
  "          t[i].city !== t[j].city &&", //                      7
  "          Math.abs(t[i].time - t[j].time) <= 60)", //          8
  "        { bad.add(i); bad.add(j); }        // rule 2", //      9
  "  }", //                                                       10
  "  return [...bad].map(i => transactions[i]);", //              11
  "}", //                                                         12
];
