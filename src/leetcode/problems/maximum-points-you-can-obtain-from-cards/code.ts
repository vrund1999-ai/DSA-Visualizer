export const CODE = [
  "function maxScore(cardPoints, k) {", //                    0
  "  const n = cardPoints.length;", //                        1
  "  const total = sum(cardPoints);", //                      2
  "  const win = n - k;   // untaken middle window", //       3
  "  let windowSum = sum(cardPoints.slice(0, win));", //      4
  "  let minWindow = windowSum;", //                          5
  "  for (let i = win; i < n; i++) {", //                     6
  "    windowSum += cardPoints[i] - cardPoints[i - win];", // 7
  "    minWindow = Math.min(minWindow, windowSum);", //       8
  "  }", //                                                   9
  "  return total - minWindow;   // take the rest", //       10
  "}", //                                                    11
];
