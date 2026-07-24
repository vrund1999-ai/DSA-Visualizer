export const CODE = [
  "function findTheWinner(n, k) {", //                        0
  "  const circle = [];", //                                 1
  "  for (let i = 1; i <= n; i++) circle.push(i);", //       2
  "  let start = 0;", //                                     3
  "  while (circle.length > 1) {", //                        4
  "    // count k from `start`, wrapping around", //         5
  "    const out = (start + k - 1) % circle.length;", //     6
  "    circle.splice(out, 1);   // eliminate", //            7
  "    start = out % circle.length;   // next count", //     8
  "  }", //                                                  9
  "  return circle[0];", //                                  10
  "}", //                                                    11
];
