export const CODE = [
  "function searchRange(nums, target) {", //                    0
  "  const bound = (isFirst) => {", //                         1
  "    let lo = 0, hi = nums.length - 1, res = -1;", //        2
  "    while (lo <= hi) {", //                                 3
  "      const mid = (lo + hi) >> 1;", //                      4
  "      if (nums[mid] === target) {", //                      5
  "        res = mid;", //                                     6
  "        isFirst ? hi = mid - 1 : lo = mid + 1;", //         7
  "      } else if (nums[mid] < target) lo = mid + 1;", //     8
  "      else hi = mid - 1;", //                               9
  "    }", //                                                  10
  "    return res;", //                                        11
  "  };", //                                                   12
  "  return [bound(true), bound(false)];", //                  13
  "}", //                                                      14
];
