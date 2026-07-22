export const CODE = [
  "function minMeetingRooms(intervals) {", //                          0
  "  const starts = intervals.map(i => i[0]).sort((a,b)=>a-b);", //    1
  "  const ends = intervals.map(i => i[1]).sort((a,b)=>a-b);", //      2
  "  let rooms = 0, maxRooms = 0, e = 0;", //                          3
  "  for (let s = 0; s < starts.length; s++) {", //                    4
  "    if (starts[s] < ends[e]) rooms++;    // new room", //          5
  "    else e++;                            // a room freed", //      6
  "    maxRooms = Math.max(maxRooms, rooms);", //                     7
  "  }", //                                                           8
  "  return maxRooms;", //                                            9
  "}", //                                                             10
];
