export const CODE = [
  "function removeOccurrences(s, part) {", //                 0
  "  let idx = s.indexOf(part);", //                          1
  "  while (idx !== -1) {", //                                2
  "    s = s.slice(0, idx) + s.slice(idx + part.length);", // 3
  "    idx = s.indexOf(part);   // may expose a new match", // 4
  "  }", //                                                   5
  "  return s;", //                                           6
  "}", //                                                     7
];
