export const CODE = [
  "function subarrayBitwiseORs(arr) {", //                    0
  "  const result = new Set();", //                           1
  "  let cur = new Set();   // ORs of subarrays ending here", // 2
  "  for (const x of arr) {", //                              3
  "    const next = new Set([x]);", //                        4
  "    for (const y of cur) next.add(x | y);", //             5
  "    cur = next;", //                                       6
  "    for (const v of cur) result.add(v);", //               7
  "  }", //                                                   8
  "  return result.size;", //                                 9
  "}", //                                                    10
];
