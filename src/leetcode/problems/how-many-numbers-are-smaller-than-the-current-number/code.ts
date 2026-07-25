export const CODE = [
  "function smallerNumbersThanCurrent(nums) {", //            0
  "  const count = new Array(101).fill(0);", //               1
  "  for (const n of nums) count[n]++;   // tally", //        2
  "  for (let i = 1; i <= 100; i++)", //                      3
  "    count[i] += count[i - 1];   // prefix sums", //        4
  "  return nums.map(n =>", //                                5
  "    n === 0 ? 0 : count[n - 1]);   // how many below", //  6
  "}", //                                                     7
];
