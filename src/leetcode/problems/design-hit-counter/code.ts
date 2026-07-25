export const CODE = [
  "class HitCounter {", //                                    0
  "  constructor() { this.q = []; }", //                      1
  "  hit(t) { this.q.push(t); }", //                          2
  "  getHits(t) {", //                                        3
  "    while (this.q.length &&", //                           4
  "           this.q[0] <= t - 300)", //                      5
  "      this.q.shift();   // drop hits > 300s old", //       6
  "    return this.q.length;", //                             7
  "  }", //                                                   8
  "}", //                                                     9
];
