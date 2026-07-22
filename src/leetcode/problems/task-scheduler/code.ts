export const CODE = [
  "function leastInterval(tasks, n) {", //                            0
  "  const counts = countValues(tasks);", //                         1
  "  const maxCount = Math.max(...counts);", //                      2
  "  const maxTasks = counts.filter(c => c === maxCount).length;", //3
  "  const framed = (maxCount - 1) * (n + 1) + maxTasks;", //        4
  "  return Math.max(tasks.length, framed);", //                     5
  "}", //                                                            6
];
