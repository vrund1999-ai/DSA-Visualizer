export const CODE = [
  "function containsNearbyAlmostDuplicate(nums, k, t) {", //  0
  "  const buckets = new Map();   // bucketId -> value", //   1
  "  const width = t + 1;", //                                2
  "  const id = (x) => Math.floor(x / width);", //            3
  "  for (let i = 0; i < nums.length; i++) {", //             4
  "    const b = id(nums[i]);", //                            5
  "    if (buckets.has(b)) return true;   // same bucket", // 6
  "    if (buckets.has(b - 1) &&", //                         7
  "        nums[i] - buckets.get(b - 1) <= t) return true;", // 8
  "    if (buckets.has(b + 1) &&", //                         9
  "        buckets.get(b + 1) - nums[i] <= t) return true;", // 10
  "    buckets.set(b, nums[i]);", //                          11
  "    if (i >= k) buckets.delete(id(nums[i - k]));  // evict", // 12
  "  }", //                                                  13
  "  return false;", //                                      14
  "}", //                                                    15
];
