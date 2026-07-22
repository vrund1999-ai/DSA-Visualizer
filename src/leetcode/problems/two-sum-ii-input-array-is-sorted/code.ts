export const CODE = [
  "function twoSum(numbers, target) {", //                    0
  "  let l = 0, r = numbers.length - 1;", //                 1
  "  while (l < r) {", //                                    2
  "    const sum = numbers[l] + numbers[r];", //             3
  "    if (sum === target) return [l + 1, r + 1];", //       4
  "    if (sum < target) l++;", //                           5
  "    else r--;", //                                        6
  "  }", //                                                  7
  "  return [];", //                                         8
  "}", //                                                    9
];
