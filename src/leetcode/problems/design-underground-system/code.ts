export const CODE = [
  "class UndergroundSystem {", //                             0
  "  ongoing = new Map();   // id -> [station, t]", //        1
  "  routes = new Map();    // 'a->b' -> [sum, count]", //    2
  "  checkIn(id, station, t) {", //                           3
  "    this.ongoing.set(id, [station, t]);", //               4
  "  }", //                                                   5
  "  checkOut(id, station, t) {", //                          6
  "    const [start, t0] = this.ongoing.get(id);", //         7
  "    const key = start + '->' + station;", //               8
  "    const [sum, n] = this.routes.get(key) ?? [0, 0];", //  9
  "    this.routes.set(key, [sum + (t - t0), n + 1]);", //   10
  "    this.ongoing.delete(id);", //                         11
  "  }", //                                                  12
  "  getAverageTime(start, end) {", //                       13
  "    const [sum, n] = this.routes.get(start+'->'+end);", // 14
  "    return sum / n;", //                                  15
  "  }", //                                                  16
  "}", //                                                    17
];
