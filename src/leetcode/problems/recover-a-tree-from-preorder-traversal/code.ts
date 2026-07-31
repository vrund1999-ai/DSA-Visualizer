export const CODE = [
  "function recoverFromPreorder(s) {", //                     0
  "  const stack = [];   // nodes by depth", //               1
  "  let i = 0;", //                                          2
  "  while (i < s.length) {", //                              3
  "    let depth = 0;", //                                    4
  "    while (s[i] === '-') { depth++; i++; }", //            5
  "    let val = 0;", //                                      6
  "    while (i < s.length && s[i] !== '-')", //              7
  "      val = val * 10 + +s[i++];", //                       8
  "    const node = { val, left: null, right: null };", //    9
  "    stack.length = depth;      // pop to parent level", // 10
  "    if (depth) {", //                                     11
  "      const p = stack[depth - 1];", //                    12
  "      p.left ? (p.right = node) : (p.left = node);", //   13
  "    }", //                                                14
  "    stack.push(node);", //                                15
  "  }", //                                                  16
  "  return stack[0];", //                                   17
  "}", //                                                    18
];
