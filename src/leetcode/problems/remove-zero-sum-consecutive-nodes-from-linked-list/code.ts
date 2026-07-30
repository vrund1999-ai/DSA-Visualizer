export const CODE = [
  "function removeZeroSumSublists(head) {", //                0
  "  const dummy = { next: head };", //                       1
  "  const last = new Map();   // prefixSum -> node", //      2
  "  let sum = 0;", //                                        3
  "  for (let n = dummy; n; n = n.next) {", //                4
  "    sum += n.val ?? 0;", //                                5
  "    last.set(sum, n);   // keep the latest", //            6
  "  }", //                                                   7
  "  sum = 0;", //                                            8
  "  for (let n = dummy; n; n = n.next) {", //                9
  "    sum += n.val ?? 0;", //                                10
  "    n.next = last.get(sum).next;   // skip zero run", //   11
  "  }", //                                                  12
  "  return dummy.next;", //                                 13
  "}", //                                                    14
];
