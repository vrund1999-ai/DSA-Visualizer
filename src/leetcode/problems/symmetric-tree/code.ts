export const CODE = [
  "function isSymmetric(root) {", //                              0
  "  function mirror(a, b) {", //                                 1
  "    if (!a && !b) return true;", //                            2
  "    if (!a || !b || a.val !== b.val) return false;", //       3
  "    return mirror(a.left, b.right)", //                        4
  "        && mirror(a.right, b.left);", //                       5
  "  }", //                                                       6
  "  return !root || mirror(root.left, root.right);", //          7
  "}", //                                                         8
];
