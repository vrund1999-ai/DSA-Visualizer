export const CODE = [
  "function findRepeatedDnaSequences(s) {", //                0
  "  const seen = new Set(), repeated = new Set();", //       1
  "  for (let i = 0; i + 10 <= s.length; i++) {", //          2
  "    const sub = s.substring(i, i + 10);", //               3
  "    if (seen.has(sub)) repeated.add(sub);   // 2nd time",//4
  "    else seen.add(sub);", //                               5
  "  }", //                                                   6
  "  return [...repeated];", //                               7
  "}", //                                                     8
];
