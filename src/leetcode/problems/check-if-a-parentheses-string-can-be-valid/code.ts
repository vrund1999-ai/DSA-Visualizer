export const CODE = [
  "function canBeValid(s, locked) {", //                      0
  "  if (s.length % 2) return false;", //                     1
  "  let bal = 0;   // forward: max possible '('", //         2
  "  for (let i = 0; i < s.length; i++) {", //                3
  "    if (locked[i] === '0' || s[i] === '(') bal++;", //     4
  "    else bal--;", //                                       5
  "    if (bal < 0) return false;   // too many ')'", //      6
  "  }", //                                                   7
  "  bal = 0;   // backward: max possible ')'", //            8
  "  for (let i = s.length - 1; i >= 0; i--) {", //           9
  "    if (locked[i] === '0' || s[i] === ')') bal++;", //    10
  "    else bal--;", //                                       11
  "    if (bal < 0) return false;   // too many '('", //     12
  "  }", //                                                  13
  "  return true;", //                                       14
  "}", //                                                    15
];
