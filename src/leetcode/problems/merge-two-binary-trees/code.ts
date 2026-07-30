export const CODE = [
  "function mergeTrees(t1, t2) {", //                         0
  "  if (!t1) return t2;   // one side empty", //             1
  "  if (!t2) return t1;", //                                 2
  "  t1.val += t2.val;   // overlap: add values", //          3
  "  t1.left = mergeTrees(t1.left, t2.left);", //             4
  "  t1.right = mergeTrees(t1.right, t2.right);", //          5
  "  return t1;", //                                          6
  "}", //                                                     7
];
