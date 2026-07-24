export const CODE = [
  "function totalFruit(fruits) {", //                         0
  "  const count = new Map();  // type -> qty in window", //  1
  "  let left = 0, best = 0;", //                             2
  "  for (let right = 0; right < fruits.length; right++) {",//3
  "    const f = fruits[right];", //                          4
  "    count.set(f, (count.get(f) ?? 0) + 1);", //            5
  "    while (count.size > 2) {   // 3rd type — shrink", //   6
  "      const g = fruits[left++];", //                       7
  "      count.set(g, count.get(g) - 1);", //                 8
  "      if (count.get(g) === 0) count.delete(g);", //        9
  "    }", //                                                 10
  "    best = Math.max(best, right - left + 1);", //          11
  "  }", //                                                   12
  "  return best;", //                                        13
  "}", //                                                     14
];
