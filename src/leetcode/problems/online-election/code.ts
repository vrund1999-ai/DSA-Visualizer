export const CODE = [
  "class TopVotedCandidate {", //                             0
  "  constructor(persons, times) {", //                       1
  "    this.times = times;", //                               2
  "    this.leaders = [];", //                                3
  "    const count = new Map();", //                          4
  "    let lead = -1;", //                                    5
  "    for (let i = 0; i < persons.length; i++) {", //        6
  "      const p = persons[i];", //                           7
  "      count.set(p, (count.get(p) ?? 0) + 1);", //          8
  "      if (count.get(p) >= (count.get(lead) ?? 0))", //     9
  "        lead = p;               // ties -> most recent", //10
  "      this.leaders.push(lead);", //                       11
  "    }", //                                                12
  "  }", //                                                  13
  "  q(t) {   // binary search last time <= t", //           14
  "    let lo = 0, hi = this.times.length - 1;", //          15
  "    while (lo < hi) {", //                                 16
  "      const mid = (lo + hi + 1) >> 1;", //                17
  "      if (this.times[mid] <= t) lo = mid;", //            18
  "      else hi = mid - 1;", //                             19
  "    }", //                                                20
  "    return this.leaders[lo];", //                         21
  "  }", //                                                  22
  "}", //                                                    23
];
