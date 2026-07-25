export const CODE = [
  "function removeStones(stones) {", //                       0
  "  const parent = stones.map((_, i) => i);", //             1
  "  const find = (x) => parent[x] === x", //                 2
  "    ? x : (parent[x] = find(parent[x]));", //              3
  "  for (let i = 0; i < stones.length; i++)", //             4
  "    for (let j = i + 1; j < stones.length; j++)", //       5
  "      if (stones[i][0] === stones[j][0] ||", //            6
  "          stones[i][1] === stones[j][1])", //              7
  "        parent[find(i)] = find(j);   // union", //         8
  "  const roots = new Set(stones.map((_, i) => find(i)));", // 9
  "  return stones.length - roots.size;", //                 10
  "}", //                                                    11
];
