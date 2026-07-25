export const CODE = [
  "function trimBST(root, low, high) {", //                   0
  "  if (!root) return null;", //                             1
  "  if (root.val < low)", //                                 2
  "    return trimBST(root.right, low, high);  // drop left",// 3
  "  if (root.val > high)", //                                4
  "    return trimBST(root.left, low, high);   // drop right",//5
  "  root.left  = trimBST(root.left,  low, high);", //        6
  "  root.right = trimBST(root.right, low, high);", //        7
  "  return root;   // in range — keep", //                   8
  "}", //                                                     9
];
