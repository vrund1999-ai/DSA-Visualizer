export const CODE = [
  "function merge(nums1, m, nums2, n) {", //             0
  "  let i = m - 1, j = n - 1, k = m + n - 1;", //       1
  "  while (j >= 0) {", //                               2
  "    if (i >= 0 && nums1[i] > nums2[j]) {", //         3
  "      nums1[k--] = nums1[i--];", //                   4
  "    } else {", //                                     5
  "      nums1[k--] = nums2[j--];", //                   6
  "    }", //                                            7
  "  }", //                                              8
  "  return nums1;", //                                  9
  "}", //                                                10
];
