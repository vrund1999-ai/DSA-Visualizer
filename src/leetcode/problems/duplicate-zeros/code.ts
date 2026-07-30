export const CODE = [
  "function duplicateZeros(arr) {", //                        0
  "  const n = arr.length;", //                               1
  "  const out = [];", //                                     2
  "  for (const x of arr) {", //                              3
  "    if (out.length >= n) break;", //                       4
  "    out.push(x);", //                                      5
  "    if (x === 0 && out.length < n)", //                    6
  "      out.push(0);        // duplicate the zero", //       7
  "  }", //                                                   8
  "  return out;   // written back into arr", //              9
  "}", //                                                    10
];
