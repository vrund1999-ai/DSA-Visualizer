export const CODE = [
  "function getKth(lo, hi, k) {", //                          0
  "  const power = (x) => {", //                              1
  "    let steps = 0;", //                                    2
  "    while (x !== 1) {", //                                 3
  "      x = x % 2 === 0 ? x / 2 : 3 * x + 1;", //            4
  "      steps++;", //                                        5
  "    }", //                                                 6
  "    return steps;", //                                     7
  "  };", //                                                  8
  "  const nums = [];", //                                    9
  "  for (let x = lo; x <= hi; x++) nums.push(x);", //        10
  "  nums.sort((a, b) =>", //                                 11
  "    power(a) - power(b) || a - b);   // tie: value", //    12
  "  return nums[k - 1];", //                                 13
  "}", //                                                     14
];
