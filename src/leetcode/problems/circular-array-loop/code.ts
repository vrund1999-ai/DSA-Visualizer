export const CODE = [
  "function circularArrayLoop(nums) {", //                    0
  "  const n = nums.length;", //                              1
  "  const next = i => ((i + nums[i]) % n + n) % n;", //      2
  "  for (let i = 0; i < n; i++) {", //                       3
  "    if (nums[i] === 0) continue;", //                      4
  "    let slow = i, fast = i;", //                           5
  "    while (sameDir(slow, next(slow)) &&", //               6
  "           sameDir(fast, next(fast)) &&", //               7
  "           sameDir(fast, next(next(fast)))) {", //         8
  "      slow = next(slow);", //                              9
  "      fast = next(next(fast));", //                       10
  "      if (slow === fast) {", //                           11
  "        if (slow === next(slow)) break;   // len 1", //   12
  "        return true;   // cycle found", //                13
  "      }", //                                              14
  "    }", //                                                15
  "    markDead(i);   // zero out this chain", //            16
  "  }", //                                                  17
  "  return false;", //                                      18
  "}", //                                                    19
];
