export const CODE = [
  "class RecentCounter {", //                                 0
  "  constructor() { this.q = []; }", //                      1
  "  ping(t) {", //                                           2
  "    this.q.push(t);", //                                   3
  "    while (this.q[0] < t - 3000)", //                      4
  "      this.q.shift();   // drop calls older than 3000ms",//5
  "    return this.q.length;", //                             6
  "  }", //                                                   7
  "}", //                                                     8
];
