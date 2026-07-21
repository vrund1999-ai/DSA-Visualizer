export const CODE = [
  "function maxArea(height) {", //                            0
  "  let l = 0, r = height.length - 1;", //                   1
  "  let best = 0;", //                                       2
  "  while (l < r) {", //                                     3
  "    const area = Math.min(height[l], height[r]) * (r - l);", // 4
  "    best = Math.max(best, area);", //                      5
  "    if (height[l] < height[r]) l++;", //                   6
  "    else r--;", //                                         7
  "  }", //                                                   8
  "  return best;", //                                        9
  "}", //                                                     10
];
