export const CODE = [
  "function suggestedProducts(products, searchWord) {", //    0
  "  products.sort();   // lexicographic", //                 1
  "  const res = [];", //                                     2
  "  let prefix = '';", //                                    3
  "  for (const ch of searchWord) {", //                      4
  "    prefix += ch;", //                                     5
  "    const hits = [];", //                                  6
  "    for (const p of products) {", //                       7
  "      if (p.startsWith(prefix)) hits.push(p);", //         8
  "      if (hits.length === 3) break;   // top 3", //        9
  "    }", //                                                10
  "    res.push(hits);", //                                  11
  "  }", //                                                  12
  "  return res;", //                                        13
  "}", //                                                    14
];
