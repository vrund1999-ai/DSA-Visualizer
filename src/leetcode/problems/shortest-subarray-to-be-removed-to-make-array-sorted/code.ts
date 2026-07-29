export const CODE = [
  "function findLengthOfShortestSubarray(a) {", //            0
  "  const n = a.length;", //                                 1
  "  let left = 0;", //                                       2
  "  while (left + 1 < n && a[left] <= a[left + 1]) left++;", //3
  "  if (left === n - 1) return 0;   // already sorted", //   4
  "  let right = n - 1;", //                                  5
  "  while (right > 0 && a[right - 1] <= a[right]) right--;", //6
  "  let ans = Math.min(n - left - 1, right);", //            7
  "  let i = 0, j = right;", //                               8
  "  while (i <= left && j < n) {", //                        9
  "    if (a[i] <= a[j]) {", //                              10
  "      ans = Math.min(ans, j - i - 1);   // bridge", //    11
  "      i++;", //                                           12
  "    } else j++;", //                                      13
  "  }", //                                                  14
  "  return ans;", //                                        15
  "}", //                                                    16
];
