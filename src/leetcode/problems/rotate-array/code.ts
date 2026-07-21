export const CODE = [
  "function rotate(nums, k) {", //                                     0
  "  k %= nums.length;", //                                           1
  "  reverse(nums, 0, nums.length - 1);   // whole array", //         2
  "  reverse(nums, 0, k - 1);             // first k", //             3
  "  reverse(nums, k, nums.length - 1);   // the rest", //           4
  "}", //                                                            5
  "function reverse(a, l, r) {", //                                  6
  "  while (l < r) { [a[l], a[r]] = [a[r], a[l]]; l++; r--; }", //   7
  "}", //                                                            8
];
