export const CODE = [
  "function addToArrayForm(num, k) {", //                     0
  "  const res = [];", //                                     1
  "  let i = num.length - 1;", //                             2
  "  let carry = k;", //                                      3
  "  while (i >= 0 || carry > 0) {", //                       4
  "    if (i >= 0) carry += num[i--];", //                    5
  "    res.push(carry % 10);", //                             6
  "    carry = Math.floor(carry / 10);", //                   7
  "  }", //                                                   8
  "  return res.reverse();", //                               9
  "}", //                                                    10
];
