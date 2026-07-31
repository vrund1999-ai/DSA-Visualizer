export const CODE = [
  "function closestValue(root, target) {", //                 0
  "  let closest = root.val;", //                             1
  "  let node = root;", //                                    2
  "  while (node) {", //                                      3
  "    if (Math.abs(node.val - target) <", //                4
  "        Math.abs(closest - target) ||", //                5
  "        (Math.abs(node.val - target) ===", //             6
  "         Math.abs(closest - target) && node.val < closest))",//7
  "      closest = node.val;   // prefer smaller on ties", // 8
  "    node = target < node.val ? node.left : node.right;", //9
  "  }", //                                                  10
  "  return closest;", //                                    11
  "}", //                                                    12
];
