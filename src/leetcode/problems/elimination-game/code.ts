export const CODE = [
  "function lastRemaining(n) {", //                           0
  "  let head = 1, step = 1, remaining = n;", //              1
  "  let leftToRight = true;", //                             2
  "  while (remaining > 1) {", //                             3
  "    if (leftToRight || remaining % 2 === 1)", //           4
  "      head += step;   // head is removed this pass", //    5
  "    remaining = Math.floor(remaining / 2);", //            6
  "    step *= 2;", //                                        7
  "    leftToRight = !leftToRight;", //                       8
  "  }", //                                                   9
  "  return head;", //                                       10
  "}", //                                                    11
];
