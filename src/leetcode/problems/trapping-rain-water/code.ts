export const CODE = [
  "function trap(height) {", //                          0
  "  let l = 0, r = height.length - 1;", //              1
  "  let leftMax = 0, rightMax = 0, water = 0;", //      2
  "  while (l < r) {", //                                3
  "    if (height[l] < height[r]) {", //                 4
  "      leftMax = Math.max(leftMax, height[l]);", //    5
  "      water += leftMax - height[l];", //              6
  "      l++;", //                                       7
  "    } else {", //                                     8
  "      rightMax = Math.max(rightMax, height[r]);", //  9
  "      water += rightMax - height[r];", //             10
  "      r--;", //                                       11
  "    }", //                                            12
  "  }", //                                              13
  "  return water;", //                                  14
  "}", //                                                15
];
