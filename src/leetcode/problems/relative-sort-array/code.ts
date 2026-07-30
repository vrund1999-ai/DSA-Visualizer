export const CODE = [
  "function relativeSortArray(arr1, arr2) {", //              0
  "  const count = new Map();", //                            1
  "  for (const x of arr1)", //                               2
  "    count.set(x, (count.get(x) ?? 0) + 1);", //            3
  "  const out = [];", //                                     4
  "  for (const x of arr2) {          // arr2 order first", //5
  "    for (let i = 0; i < count.get(x); i++) out.push(x);", //6
  "    count.delete(x);", //                                  7
  "  }", //                                                   8
  "  const rest = [...count.entries()]", //                   9
  "    .flatMap(([x, c]) => Array(c).fill(x))", //           10
  "    .sort((a, b) => a - b);        // leftovers ascending",//11
  "  return [...out, ...rest];", //                          12
  "}", //                                                    13
];
