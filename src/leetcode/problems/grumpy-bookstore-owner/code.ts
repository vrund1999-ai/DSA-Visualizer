export const CODE = [
  "function maxSatisfied(customers, grumpy, X) {", //         0
  "  let base = 0;", //                                       1
  "  for (let i = 0; i < customers.length; i++)", //          2
  "    if (!grumpy[i]) base += customers[i];   // already ok", //3
  "  let win = 0, best = 0;", //                              4
  "  for (let i = 0; i < customers.length; i++) {", //        5
  "    if (grumpy[i]) win += customers[i];   // recovered", //6
  "    if (i >= X && grumpy[i - X])", //                      7
  "      win -= customers[i - X];   // leaves window", //     8
  "    best = Math.max(best, win);", //                       9
  "  }", //                                                  10
  "  return base + best;", //                                11
  "}", //                                                    12
];
