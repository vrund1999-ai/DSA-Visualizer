export const CODE = [
  "class TimeMap {", //                                       0
  "  store = new Map();   // key -> [[ts, value], ...]", //   1
  "  set(key, value, timestamp) {", //                        2
  "    if (!this.store.has(key)) this.store.set(key, []);", // 3
  "    this.store.get(key).push([timestamp, value]);", //     4
  "  }", //                                                   5
  "  get(key, timestamp) {", //                               6
  "    const a = this.store.get(key) ?? [];", //              7
  "    let lo = 0, hi = a.length - 1, ans = '';", //          8
  "    while (lo <= hi) {", //                                9
  "      const mid = (lo + hi) >> 1;", //                    10
  "      if (a[mid][0] <= timestamp) {", //                  11
  "        ans = a[mid][1]; lo = mid + 1;   // go newer", // 12
  "      } else hi = mid - 1;", //                           13
  "    }", //                                                14
  "    return ans;", //                                      15
  "  }", //                                                  16
  "}", //                                                    17
];
