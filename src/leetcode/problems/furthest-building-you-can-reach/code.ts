export const CODE = [
  "function furthestBuilding(heights, bricks, ladders) {", // 0
  "  const heap = new MinHeap();   // climbs using ladders", //1
  "  for (let i = 0; i + 1 < heights.length; i++) {", //      2
  "    const climb = heights[i + 1] - heights[i];", //        3
  "    if (climb <= 0) continue;   // step down, free", //    4
  "    heap.push(climb);", //                                 5
  "    if (heap.size() > ladders)", //                        6
  "      bricks -= heap.pop();   // brick the smallest", //   7
  "    if (bricks < 0) return i;   // stuck here", //         8
  "  }", //                                                   9
  "  return heights.length - 1;   // reached the end", //    10
  "}", //                                                    11
];
