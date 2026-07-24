export const CODE = [
  "function asteroidCollision(asteroids) {", //               0
  "  const stack = [];", //                                   1
  "  for (const a of asteroids) {", //                        2
  "    let alive = true;", //                                 3
  "    while (alive && a < 0 &&", //                          4
  "           stack.length && stack.at(-1) > 0) {", //        5
  "      const top = stack.at(-1);", //                       6
  "      if (top < -a) stack.pop();        // top explodes",//7
  "      else if (top === -a) { stack.pop(); alive = false; }",//8
  "      else alive = false;               // a explodes", // 9
  "    }", //                                                10
  "    if (alive) stack.push(a);", //                        11
  "  }", //                                                  12
  "  return stack;", //                                      13
  "}", //                                                    14
];
