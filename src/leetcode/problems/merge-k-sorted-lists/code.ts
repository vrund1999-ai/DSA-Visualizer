export const CODE = [
  "function mergeKLists(lists) {", //                               0
  "  const heap = new MinHeap();   // by head value", //           1
  "  lists.forEach((l, i) => { if (l) heap.push([l.val, i, l]); });",// 2
  "  const dummy = { next: null }; let tail = dummy;", //          3
  "  while (heap.size()) {", //                                    4
  "    const [val, i, node] = heap.pop();   // smallest head", //  5
  "    tail.next = node; tail = node;", //                         6
  "    if (node.next) heap.push([node.next.val, i, node.next]);", //7
  "  }", //                                                        8
  "  return dummy.next;", //                                       9
  "}", //                                                          10
];
