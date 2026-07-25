export const CODE = [
  "function subarraysWithKDistinct(nums, k) {", //            0
  "  // exactly k = atMost(k) - atMost(k-1)", //             1
  "  const atMost = (m) => {", //                             2
  "    const count = new Map();", //                          3
  "    let left = 0, res = 0;", //                            4
  "    for (let right = 0; right < nums.length; right++) {",//5
  "      add(count, nums[right]);", //                        6
  "      while (count.size > m) {   // too many distinct", // 7
  "        remove(count, nums[left++]);", //                  8
  "      }", //                                               9
  "      res += right - left + 1;   // windows ending here",//10
  "    }", //                                                11
  "    return res;", //                                      12
  "  };", //                                                 13
  "  return atMost(k) - atMost(k - 1);", //                  14
  "}", //                                                    15
];
