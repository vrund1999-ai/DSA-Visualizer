export const CODE = [
  "function deleteNode(node) {", //                           0
  "  // we're given only the node to delete,", //            1
  "  // not the head — so we can't fix prev.next", //        2
  "  node.val = node.next.val;   // copy successor's value",//3
  "  node.next = node.next.next; // skip the successor", //  4
  "}", //                                                    5
];
