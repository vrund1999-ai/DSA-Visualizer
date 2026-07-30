export const CODE = [
  "function closeStrings(word1, word2) {", //                 0
  "  const f1 = count(word1), f2 = count(word2);", //         1
  "  // 1) exactly the same set of characters", //            2
  "  const keys1 = [...Object.keys(f1)].sort();", //          3
  "  const keys2 = [...Object.keys(f2)].sort();", //          4
  "  if (keys1.join() !== keys2.join()) return false;", //    5
  "  // 2) the same multiset of frequencies", //              6
  "  const v1 = Object.values(f1).sort((a,b)=>a-b);", //      7
  "  const v2 = Object.values(f2).sort((a,b)=>a-b);", //      8
  "  return v1.join() === v2.join();", //                     9
  "}", //                                                    10
];
