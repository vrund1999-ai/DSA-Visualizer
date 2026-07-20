/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const LINKED_LIST_CODE = [
  "insertHead(x) {", //                          0
  "  node.next = head; head = node;", //         1
  "}", //                                         2
  "insertTail(x) {", //                           3
  "  let cur = head;", //                         4
  "  while (cur.next) cur = cur.next;", //        5
  "  cur.next = node;", //                        6
  "}", //                                         7
  "delete(x) {", //                               8
  "  let cur = head;", //                         9
  "  while (cur && cur.value !== x)", //          10
  "    cur = cur.next;", //                       11
  "  unlink(cur);", //                            12
  "}", //                                         13
];
