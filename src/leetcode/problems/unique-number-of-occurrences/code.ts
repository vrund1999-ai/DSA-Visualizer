export const CODE = [
  "function uniqueOccurrences(arr) {", //                     0
  "  const count = new Map();", //                            1
  "  for (const x of arr)", //                               2
  "    count.set(x, (count.get(x) ?? 0) + 1);", //           3
  "  const seen = new Set();", //                            4
  "  for (const c of count.values()) {", //                  5
  "    if (seen.has(c)) return false;   // dup count", //    6
  "    seen.add(c);", //                                     7
  "  }", //                                                   8
  "  return true;", //                                       9
  "}", //                                                    10
];
