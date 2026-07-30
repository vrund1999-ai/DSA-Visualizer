export const CODE = [
  "function flipAndInvertImage(image) {", //                  0
  "  for (const row of image) {", //                          1
  "    let l = 0, r = row.length - 1;", //                    2
  "    while (l <= r) {", //                                  3
  "      // swap ends AND invert (0<->1)", //                 4
  "      const tmp = row[l] ^ 1;", //                         5
  "      row[l] = row[r] ^ 1;", //                            6
  "      row[r] = tmp;", //                                   7
  "      l++; r--;", //                                       8
  "    }", //                                                 9
  "  }", //                                                  10
  "  return image;", //                                      11
  "}", //                                                    12
];
