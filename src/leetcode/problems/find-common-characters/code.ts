export const CODE = [
  "function commonChars(words) {", //                         0
  "  let min = count(words[0]);   // 26 slots", //            1
  "  for (let w = 1; w < words.length; w++) {", //            2
  "    const c = count(words[w]);", //                        3
  "    for (let i = 0; i < 26; i++)", //                      4
  "      min[i] = Math.min(min[i], c[i]);   // intersect", // 5
  "  }", //                                                   6
  "  const res = [];", //                                     7
  "  for (let i = 0; i < 26; i++)", //                        8
  "    for (let k = 0; k < min[i]; k++)", //                  9
  "      res.push(String.fromCharCode(97 + i));", //         10
  "  return res;", //                                        11
  "}", //                                                    12
];
