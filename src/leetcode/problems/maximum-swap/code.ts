export const CODE = [
  "function maximumSwap(num) {", //                           0
  "  const d = String(num).split('');", //                    1
  "  const last = {};   // digit -> last index", //           2
  "  d.forEach((c, i) => last[c] = i);", //                   3
  "  for (let i = 0; i < d.length; i++) {", //                4
  "    for (let big = 9; big > +d[i]; big--) {", //           5
  "      if (last[big] > i) {   // a bigger digit later", //  6
  "        [d[i], d[last[big]]] = [d[last[big]], d[i]];", //  7
  "        return +d.join('');   // one swap only", //        8
  "      }", //                                               9
  "    }", //                                                10
  "  }", //                                                  11
  "  return num;", //                                        12
  "}", //                                                    13
];
