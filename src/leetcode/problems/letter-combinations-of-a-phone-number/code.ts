export const CODE = [
  "function letterCombinations(digits) {", //                      0
  "  if (!digits) return [];", //                                  1
  "  const map = {2:'abc',3:'def',4:'ghi',5:'jkl',", //           2
  "    6:'mno',7:'pqrs',8:'tuv',9:'wxyz'};", //                    3
  "  const res = [];", //                                          4
  "  function bt(i, cur) {", //                                    5
  "    if (i === digits.length) { res.push(cur); return; }", //    6
  "    for (const ch of map[digits[i]])", //                       7
  "      bt(i + 1, cur + ch);", //                                 8
  "  }", //                                                        9
  "  bt(0, '');", //                                               10
  "  return res;", //                                              11
  "}", //                                                          12
];
