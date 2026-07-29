export const CODE = [
  "function isSubtree(root, subRoot) {", //                   0
  "  if (!root) return false;", //                            1
  "  if (sameTree(root, subRoot)) return true;", //           2
  "  return isSubtree(root.left, subRoot)", //                3
  "      || isSubtree(root.right, subRoot);", //              4
  "}", //                                                     5
  "function sameTree(a, b) {", //                             6
  "  if (!a && !b) return true;", //                          7
  "  if (!a || !b || a.val !== b.val) return false;", //      8
  "  return sameTree(a.left, b.left)", //                     9
  "      && sameTree(a.right, b.right);", //                 10
  "}", //                                                    11
];
