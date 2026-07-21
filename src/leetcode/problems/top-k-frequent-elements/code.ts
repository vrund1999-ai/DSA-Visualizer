export const CODE = [
  "function topKFrequent(nums, k) {", //                                    0
  "  const count = new Map();", //                                         1
  "  for (const x of nums) count.set(x, (count.get(x) || 0) + 1);", //     2
  "  const buckets = [];", //                                              3
  "  for (const [x, c] of count) (buckets[c] ??= []).push(x);", //         4
  "  const res = [];", //                                                  5
  "  for (let c = buckets.length - 1; c >= 0 && res.length < k; c--)", //  6
  "    if (buckets[c]) res.push(...buckets[c]);", //                       7
  "  return res.slice(0, k);", //                                          8
  "}", //                                                                  9
];
