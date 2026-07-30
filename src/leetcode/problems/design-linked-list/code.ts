export const CODE = [
  "class MyLinkedList {", //                                  0
  "  nodes = [];", //                                         1
  "  get(i) {", //                                            2
  "    return i >= 0 && i < this.nodes.length", //            3
  "      ? this.nodes[i] : -1;", //                           4
  "  }", //                                                   5
  "  addAtHead(v) { this.nodes.unshift(v); }", //             6
  "  addAtTail(v) { this.nodes.push(v); }", //                7
  "  addAtIndex(i, v) {", //                                  8
  "    if (i <= this.nodes.length)", //                       9
  "      this.nodes.splice(Math.max(0, i), 0, v);", //       10
  "  }", //                                                  11
  "  deleteAtIndex(i) {", //                                 12
  "    if (i >= 0 && i < this.nodes.length)", //             13
  "      this.nodes.splice(i, 1);", //                       14
  "  }", //                                                  15
  "}", //                                                    16
];
