export const CODE = [
  "function kSmallestPairs(nums1, nums2, k) {", //            0
  "  const heap = new MinHeap();   // [sum, i, j]", //        1
  "  heap.push([nums1[0] + nums2[0], 0, 0]);", //             2
  "  const res = [], seen = new Set(['0,0']);", //            3
  "  while (res.length < k && heap.size()) {", //             4
  "    const [, i, j] = heap.pop();   // smallest sum", //    5
  "    res.push([nums1[i], nums2[j]]);", //                   6
  "    for (const [di, dj] of [[1,0],[0,1]]) {", //           7
  "      const ni = i+di, nj = j+dj;", //                     8
  "      if (ni<nums1.length && nj<nums2.length", //          9
  "          && !seen.has(ni+','+nj)) {", //                 10
  "        seen.add(ni+','+nj);", //                         11
  "        heap.push([nums1[ni]+nums2[nj], ni, nj]);", //    12
  "      }", //                                              13
  "    }", //                                                14
  "  }", //                                                  15
  "  return res;", //                                        16
  "}", //                                                    17
];
