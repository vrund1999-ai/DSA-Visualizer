export const CODE = [
  "function minAddToMakeValid(s) {", //                       0
  "  let open = 0;   // unmatched '('", //                    1
  "  let add = 0;    // '(' we must insert", //               2
  "  for (const ch of s) {", //                               3
  "    if (ch === '(') open++;", //                           4
  "    else if (open > 0) open--;   // match a '('", //       5
  "    else add++;                  // stray ')'", //         6
  "  }", //                                                   7
  "  return add + open;   // strays + leftover '('", //       8
  "}", //                                                     9
];
