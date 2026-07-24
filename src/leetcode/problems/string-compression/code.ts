export const CODE = [
  "function compress(chars) {", //                             0
  "  let write = 0, read = 0;", //                            1
  "  while (read < chars.length) {", //                       2
  "    const c = chars[read]; let count = 0;", //            3
  "    while (chars[read] === c) { read++; count++; }", //   4
  "    chars[write++] = c;                 // char", //       5
  "    if (count > 1)", //                                    6
  "      for (const d of String(count))    // count", //      7
  "        chars[write++] = d;", //                           8
  "  }", //                                                   9
  "  return write;", //                                       10
  "}", //                                                     11
];
