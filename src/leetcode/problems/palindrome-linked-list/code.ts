export const CODE = [
  "function isPalindrome(head) {", //                       0
  "  const vals = [];", //                                 1
  "  for (let n = head; n; n = n.next) vals.push(n.val);",// 2
  "  let l = 0, r = vals.length - 1;", //                  3
  "  while (l < r) {", //                                  4
  "    if (vals[l] !== vals[r]) return false;", //         5
  "    l++; r--;", //                                      6
  "  }", //                                                7
  "  return true;", //                                     8
  "}", //                                                  9
];
