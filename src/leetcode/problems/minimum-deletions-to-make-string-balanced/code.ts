export const CODE = [
  "function minimumDeletions(s) {", //                        0
  "  let del = 0;   // deletions so far", //                  1
  "  let b = 0;     // count of 'b' seen", //                 2
  "  for (const ch of s) {", //                               3
  "    if (ch === 'b') {", //                                 4
  "      b++;   // a 'b' is free for now", //                 5
  "    } else {", //                                          6
  "      // keep this 'a': delete a prior 'b'", //            7
  "      // or delete this 'a' itself", //                    8
  "      del = Math.min(del + 1, b);", //                     9
  "    }", //                                                10
  "  }", //                                                  11
  "  return del;", //                                        12
  "}", //                                                    13
];
