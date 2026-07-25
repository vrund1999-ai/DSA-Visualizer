export const CODE = [
  "function findContentChildren(g, s) {", //                  0
  "  g.sort((a, b) => a - b);   // greed factors", //         1
  "  s.sort((a, b) => a - b);   // cookie sizes", //          2
  "  let child = 0, cookie = 0;", //                          3
  "  while (child < g.length && cookie < s.length) {", //     4
  "    if (s[cookie] >= g[child]) child++;   // satisfied", //5
  "    cookie++;   // move to the next cookie", //            6
  "  }", //                                                   7
  "  return child;   // content children", //                8
  "}", //                                                     9
];
