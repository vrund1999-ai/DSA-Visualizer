export const CODE = [
  "function queryResults(limit, queries) {", //               0
  "  const ballColor = new Map();   // ball -> color", //     1
  "  const colorCount = new Map();  // color -> #balls", //   2
  "  const result = [];", //                                  3
  "  for (const [ball, color] of queries) {", //              4
  "    if (ballColor.has(ball)) {   // recolor: drop old", // 5
  "      const old = ballColor.get(ball);", //                6
  "      colorCount.set(old, colorCount.get(old) - 1);", //   7
  "      if (colorCount.get(old) === 0) colorCount.delete(old);",//8
  "    }", //                                                 9
  "    ballColor.set(ball, color);", //                      10
  "    colorCount.set(color, (colorCount.get(color) ?? 0) + 1);",//11
  "    result.push(colorCount.size);   // distinct colors", //12
  "  }", //                                                  13
  "  return result;", //                                     14
  "}", //                                                    15
];
