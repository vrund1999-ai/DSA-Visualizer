export const CODE = [
  "function sortArray(nums) {", //                            0
  "  if (nums.length <= 1) return nums;", //                  1
  "  const mid = nums.length >> 1;", //                       2
  "  const left  = sortArray(nums.slice(0, mid));", //        3
  "  const right = sortArray(nums.slice(mid));", //           4
  "  return merge(left, right);", //                          5
  "}", //                                                     6
  "function merge(a, b) {", //                                7
  "  const out = []; let i = 0, j = 0;", //                   8
  "  while (i < a.length && j < b.length)", //                9
  "    out.push(a[i] <= b[j] ? a[i++] : b[j++]);", //         10
  "  return [...out, ...a.slice(i), ...b.slice(j)];", //      11
  "}", //                                                     12
];
