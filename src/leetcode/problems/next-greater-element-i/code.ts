export const CODE = [
  "function nextGreaterElement(nums1, nums2) {", //                 0
  "  const next = new Map(), stack = [];", //                      1
  "  for (const x of nums2) {", //                                 2
  "    while (stack.length && x > stack.at(-1))", //               3
  "      next.set(stack.pop(), x);   // x is the answer", //       4
  "    stack.push(x);", //                                         5
  "  }", //                                                        6
  "  return nums1.map(x => next.get(x) ?? -1);", //                7
  "}", //                                                          8
];
