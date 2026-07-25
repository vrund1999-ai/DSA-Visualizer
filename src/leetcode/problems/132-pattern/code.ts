export const CODE = [
  "function find132pattern(nums) {", //                       0
  "  const stack = [];   // decreasing candidate '3's", //    1
  "  let k = -Infinity;  // best '2' so far", //              2
  "  for (let i = nums.length - 1; i >= 0; i--) {", //        3
  "    if (nums[i] < k) return true;   // found '1'<'2'", //  4
  "    while (stack.length && stack.at(-1) < nums[i]) {", //  5
  "      k = stack.pop();   // this becomes the '2'", //      6
  "    }", //                                                 7
  "    stack.push(nums[i]);   // candidate '3'", //           8
  "  }", //                                                   9
  "  return false;", //                                      10
  "}", //                                                    11
];
