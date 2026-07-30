export const CODE = [
  "function groupThePeople(groupSizes) {", //                 0
  "  const buckets = new Map();   // size -> people", //      1
  "  const res = [];", //                                     2
  "  for (let i = 0; i < groupSizes.length; i++) {", //       3
  "    const size = groupSizes[i];", //                       4
  "    if (!buckets.has(size)) buckets.set(size, []);", //    5
  "    const group = buckets.get(size);", //                  6
  "    group.push(i);", //                                    7
  "    if (group.length === size) {   // full", //            8
  "      res.push(group);", //                                9
  "      buckets.set(size, []);   // start fresh", //        10
  "    }", //                                                11
  "  }", //                                                  12
  "  return res;", //                                        13
  "}", //                                                    14
];
