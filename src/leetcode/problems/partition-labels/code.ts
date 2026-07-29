export const CODE = [
  "function partitionLabels(s) {", //                         0
  "  const last = {};", //                                    1
  "  for (let i = 0; i < s.length; i++) last[s[i]] = i;", //  2
  "  const result = [];", //                                  3
  "  let start = 0, end = 0;", //                             4
  "  for (let i = 0; i < s.length; i++) {", //                5
  "    end = Math.max(end, last[s[i]]);   // extend reach", // 6
  "    if (i === end) {                   // window closed", // 7
  "      result.push(i - start + 1);", //                     8
  "      start = i + 1;", //                                  9
  "    }", //                                                10
  "  }", //                                                  11
  "  return result;", //                                     12
  "}", //                                                    13
];
