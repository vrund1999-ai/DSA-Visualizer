export const CODE = [
  "class BSTIterator {", //                                   0
  "  constructor(root) {", //                                 1
  "    this.stack = [];", //                                  2
  "    this.pushLeft(root);   // leftmost spine", //          3
  "  }", //                                                   4
  "  pushLeft(node) {", //                                    5
  "    while (node) { this.stack.push(node); node = node.left; }", // 6
  "  }", //                                                   7
  "  next() {", //                                            8
  "    const node = this.stack.pop();   // smallest unseen", // 9
  "    this.pushLeft(node.right);", //                       10
  "    return node.val;", //                                 11
  "  }", //                                                  12
  "  hasNext() { return this.stack.length > 0; }", //        13
  "}", //                                                    14
];
