export const CODE = [
  "function maximumPopulation(logs) {", //                    0
  "  const delta = {};   // year -> change", //               1
  "  for (const [birth, death] of logs) {", //                2
  "    delta[birth] = (delta[birth] ?? 0) + 1;", //           3
  "    delta[death] = (delta[death] ?? 0) - 1;", //           4
  "  }", //                                                   5
  "  let pop = 0, best = 0, year = 0;", //                    6
  "  for (const y of Object.keys(delta).sort()) {", //        7
  "    pop += delta[y];   // running population", //          8
  "    if (pop > best) { best = pop; year = +y; }", //        9
  "  }", //                                                  10
  "  return year;", //                                       11
  "}", //                                                    12
];
