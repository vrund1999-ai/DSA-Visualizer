export const CODE = [
  "function candy(ratings) {", //                                  0
  "  const n = ratings.length, c = new Array(n).fill(1);", //     1
  "  for (let i = 1; i < n; i++)          // left → right", //    2
  "    if (ratings[i] > ratings[i-1]) c[i] = c[i-1] + 1;", //     3
  "  for (let i = n - 2; i >= 0; i--)     // right → left", //    4
  "    if (ratings[i] > ratings[i+1])", //                        5
  "      c[i] = Math.max(c[i], c[i+1] + 1);", //                  6
  "  return c.reduce((a, b) => a + b, 0);", //                    7
  "}", //                                                         8
];
