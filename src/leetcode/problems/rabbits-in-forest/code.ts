export const CODE = [
  "function numRabbits(answers) {", //                        0
  "  const freq = {};", //                                    1
  "  for (const a of answers) freq[a] = (freq[a]??0)+1;", //  2
  "  let total = 0;", //                                      3
  "  for (const [a, count] of Object.entries(freq)) {", //    4
  "    const groupSize = +a + 1;   // this color's herd", //  5
  "    const groups = Math.ceil(count / groupSize);", //      6
  "    total += groups * groupSize;", //                      7
  "  }", //                                                   8
  "  return total;", //                                       9
  "}", //                                                    10
];
