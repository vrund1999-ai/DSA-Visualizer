export const CODE = [
  "function copyRandomList(head) {", //                       0
  "  const map = new Map();   // original -> copy", //        1
  "  let cur = head;", //                                     2
  "  while (cur) {   // pass 1: clone values", //             3
  "    map.set(cur, { val: cur.val, next: null, random: null });", // 4
  "    cur = cur.next;", //                                   5
  "  }", //                                                   6
  "  cur = head;", //                                         7
  "  while (cur) {   // pass 2: wire next + random", //       8
  "    map.get(cur).next   = map.get(cur.next)   ?? null;", //9
  "    map.get(cur).random = map.get(cur.random) ?? null;", //10
  "    cur = cur.next;", //                                   11
  "  }", //                                                   12
  "  return map.get(head) ?? null;", //                       13
  "}", //                                                     14
];
