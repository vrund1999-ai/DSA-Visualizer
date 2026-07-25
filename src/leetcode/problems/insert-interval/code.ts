export const CODE = [
  "function insert(intervals, newInterval) {", //             0
  "  const res = [];", //                                     1
  "  let [s, e] = newInterval, i = 0;", //                    2
  "  // 1) intervals entirely before newInterval", //        3
  "  while (i < intervals.length && intervals[i][1] < s)", // 4
  "    res.push(intervals[i++]);", //                         5
  "  // 2) merge all overlapping intervals", //              6
  "  while (i < intervals.length && intervals[i][0] <= e) {",//7
  "    s = Math.min(s, intervals[i][0]);", //                 8
  "    e = Math.max(e, intervals[i][1]); i++;", //            9
  "  }", //                                                  10
  "  res.push([s, e]);", //                                  11
  "  // 3) the rest, entirely after", //                     12
  "  while (i < intervals.length) res.push(intervals[i++]);",//13
  "  return res;", //                                        14
  "}", //                                                    15
];
