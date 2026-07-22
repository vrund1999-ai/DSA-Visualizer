export const CODE = [
  "function isSameTree(p, q) {", //                              0
  "  if (!p && !q) return true;", //                            1
  "  if (!p || !q || p.val !== q.val) return false;", //        2
  "  return isSameTree(p.left, q.left)", //                     3
  "      && isSameTree(p.right, q.right);", //                  4
  "}", //                                                       5
];
