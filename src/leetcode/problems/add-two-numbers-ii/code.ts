export const CODE = [
  "function addTwoNumbers(l1, l2) {", //                      0
  "  const s1 = [], s2 = [];", //                             1
  "  while (l1) { s1.push(l1.val); l1 = l1.next; }", //       2
  "  while (l2) { s2.push(l2.val); l2 = l2.next; }", //       3
  "  let carry = 0, head = null;", //                         4
  "  while (s1.length || s2.length || carry) {", //           5
  "    const a = s1.pop() ?? 0;", //                          6
  "    const b = s2.pop() ?? 0;", //                          7
  "    const sum = a + b + carry;", //                        8
  "    carry = Math.floor(sum / 10);", //                     9
  "    const node = { val: sum % 10, next: head };", //       10
  "    head = node;   // prepend (builds high→low)", //       11
  "  }", //                                                   12
  "  return head;", //                                        13
  "}", //                                                     14
];
