export const CODE = [
  "function sortedArrayToBST(nums) {", //                         0
  "  function build(lo, hi) {", //                               1
  "    if (lo > hi) return null;", //                            2
  "    const mid = (lo + hi) >> 1;", //                          3
  "    const node = new TreeNode(nums[mid]);", //                4
  "    node.left = build(lo, mid - 1);", //                      5
  "    node.right = build(mid + 1, hi);", //                     6
  "    return node;", //                                         7
  "  }", //                                                      8
  "  return build(0, nums.length - 1);", //                      9
  "}", //                                                        10
];
