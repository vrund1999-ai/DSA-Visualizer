export const CODE = [
  "class MyCalendar {", //                                    0
  "  booked = [];", //                                        1
  "  book(start, end) {", //                                  2
  "    for (const [s, e] of this.booked) {", //               3
  "      // overlap iff start < e AND s < end", //            4
  "      if (start < e && s < end) return false;", //         5
  "    }", //                                                 6
  "    this.booked.push([start, end]);", //                   7
  "    return true;", //                                       8
  "  }", //                                                   9
  "}", //                                                    10
];
