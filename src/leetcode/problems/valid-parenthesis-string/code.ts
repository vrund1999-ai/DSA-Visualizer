export const CODE = [
  "function checkValidString(s) {", //                        0
  "  let lo = 0, hi = 0;   // range of open '(' count", //    1
  "  for (const c of s) {", //                                2
  "    if (c === '(') { lo++; hi++; }", //                    3
  "    else if (c === ')') { lo--; hi--; }", //               4
  "    else { lo--; hi++; }   // '*' = ( , ) or empty", //    5
  "    if (hi < 0) return false;   // too many ')'", //       6
  "    if (lo < 0) lo = 0;         // clamp", //              7
  "  }", //                                                   8
  "  return lo === 0;   // can balance", //                   9
  "}", //                                                    10
];
