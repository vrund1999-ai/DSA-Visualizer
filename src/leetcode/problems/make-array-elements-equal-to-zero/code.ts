export const CODE = [
  "function countValidSelections(nums) {", //                 0
  "  let count = 0;", //                                       1
  "  for (let start = 0; start < nums.length; start++) {", // 2
  "    if (nums[start] !== 0) continue;   // start on a 0", // 3
  "    for (const d of [-1, 1]) {   // try each direction", // 4
  "      const a = [...nums];", //                            5
  "      let curr = start, dir = d;", //                      6
  "      while (curr >= 0 && curr < a.length) {", //          7
  "        if (a[curr] === 0) curr += dir;", //               8
  "        else { a[curr]--; dir = -dir; curr += dir; }", //  9
  "      }", //                                               10
  "      if (a.every(x => x === 0)) count++;", //             11
  "    }", //                                                 12
  "  }", //                                                   13
  "  return count;", //                                       14
  "}", //                                                     15
];
