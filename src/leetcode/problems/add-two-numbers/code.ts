export const CODE = [
  "function addTwoNumbers(l1, l2) {", //                          0
  "  const dummy = { next: null };", //                          1
  "  let tail = dummy, carry = 0;", //                           2
  "  while (l1 || l2 || carry) {", //                            3
  "    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;", // 4
  "    carry = Math.floor(sum / 10);", //                        5
  "    tail.next = { val: sum % 10, next: null };", //           6
  "    tail = tail.next;", //                                    7
  "    l1 = l1?.next; l2 = l2?.next;", //                        8
  "  }", //                                                      9
  "  return dummy.next;", //                                     10
  "}", //                                                        11
];
