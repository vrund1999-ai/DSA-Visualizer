export const CODE = [
  "function firstUniqChar(s) {", //                          0
  "  const count = {};", //                                  1
  "  for (const c of s) count[c] = (count[c] || 0) + 1;", // 2
  "  for (let i = 0; i < s.length; i++)", //                 3
  "    if (count[s[i]] === 1) return i;", //                 4
  "  return -1;", //                                         5
  "}", //                                                    6
];
