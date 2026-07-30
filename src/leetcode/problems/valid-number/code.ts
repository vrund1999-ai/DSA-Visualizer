export const CODE = [
  "function isNumber(s) {", //                                0
  "  let digit = false, dot = false, exp = false;", //        1
  "  for (let i = 0; i < s.length; i++) {", //                2
  "    const c = s[i];", //                                   3
  "    if (c >= '0' && c <= '9') digit = true;", //           4
  "    else if (c === '+' || c === '-') {", //                5
  "      if (i > 0 && s[i-1] !== 'e' && s[i-1] !== 'E')", //  6
  "        return false;   // sign only at start or post-e", //7
  "    } else if (c === '.') {", //                           8
  "      if (dot || exp) return false;", //                   9
  "      dot = true;", //                                    10
  "    } else if (c === 'e' || c === 'E') {", //             11
  "      if (exp || !digit) return false;", //               12
  "      exp = true; digit = false;   // need digits after", //13
  "    } else return false;", //                             14
  "  }", //                                                  15
  "  return digit;", //                                      16
  "}", //                                                    17
];
