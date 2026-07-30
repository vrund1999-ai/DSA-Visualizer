export const CODE = [
  "function sortPeople(names, heights) {", //                 0
  "  return names", //                                        1
  "    .map((name, i) => [name, heights[i]])", //             2
  "    .sort((a, b) => b[1] - a[1])   // height desc", //     3
  "    .map(([name]) => name);", //                           4
  "}", //                                                     5
];
