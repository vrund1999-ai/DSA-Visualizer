export const CODE = [
  "function addBinary(a, b) {", //                              0
  "  let i = a.length-1, j = b.length-1, carry = 0;", //       1
  "  const res = [];", //                                      2
  "  while (i >= 0 || j >= 0 || carry) {", //                  3
  "    const sum = (+a[i--] || 0) + (+b[j--] || 0) + carry;",// 4
  "    res.push(sum % 2);", //                                 5
  "    carry = sum >> 1;", //                                  6
  "  }", //                                                    7
  "  return res.reverse().join('');", //                       8
  "}", //                                                      9
];
