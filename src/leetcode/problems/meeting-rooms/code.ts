export const CODE = [
  "function canAttendMeetings(intervals) {", //               0
  "  intervals.sort((a, b) => a[0] - b[0]);", //              1
  "  for (let i = 1; i < intervals.length; i++) {", //        2
  "    const prevEnd = intervals[i - 1][1];", //              3
  "    const curStart = intervals[i][0];", //                 4
  "    if (curStart < prevEnd)", //                           5
  "      return false;   // overlap", //                      6
  "  }", //                                                   7
  "  return true;   // no conflicts", //                      8
  "}", //                                                     9
];
