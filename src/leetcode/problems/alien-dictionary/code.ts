export const CODE = [
  "function alienOrder(words) {", //                          0
  "  const adj = new Map(), indeg = new Map();", //           1
  "  for (const w of words) for (const c of w)", //           2
  "    { adj.set(c, adj.get(c) ?? new Set()); indeg.set(c, 0); }",//3
  "  for (let i = 1; i < words.length; i++) {", //            4
  "    const [a, b] = [words[i-1], words[i]];", //            5
  "    if (a.startsWith(b) && a.length > b.length) return '';",//6
  "    for (let j = 0; j < Math.min(a.length, b.length); j++)",//7
  "      if (a[j] !== b[j]) {   // first difference", //      8
  "        if (!adj.get(a[j]).has(b[j])) {", //               9
  "          adj.get(a[j]).add(b[j]);", //                   10
  "          indeg.set(b[j], indeg.get(b[j]) + 1);", //      11
  "        }", //                                            12
  "        break;", //                                       13
  "      }", //                                              14
  "  }", //                                                  15
  "  const q = [...indeg].filter(([,d]) => d===0).map(x=>x[0]);",//16
  "  let order = '';", //                                    17
  "  while (q.length) {", //                                 18
  "    const c = q.shift(); order += c;", //                 19
  "    for (const n of adj.get(c))", //                      20
  "      if (--indeg.set(n, indeg.get(n)-1).get(n) === 0) q.push(n);",//21
  "  }", //                                                  22
  "  return order.length === indeg.size ? order : '';", //   23
  "}", //                                                    24
];
