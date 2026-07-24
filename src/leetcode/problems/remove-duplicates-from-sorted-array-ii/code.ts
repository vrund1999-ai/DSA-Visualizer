export const CODE = [
  "function removeDuplicates(nums) {", //                     0
  "  let write = 0;   // next slot to fill", //               1
  "  for (const n of nums) {   // read pointer", //           2
  "    if (write < 2 || nums[write - 2] !== n) {", //         3
  "      nums[write++] = n;   // keep (≤ 2 copies)", //       4
  "    }", //                                                 5
  "    // else skip: already two of n", //                    6
  "  }", //                                                   7
  "  return write;   // new length", //                       8
  "}", //                                                     9
];
