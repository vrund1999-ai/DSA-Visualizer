export const CODE = [
  "function groupAnagrams(strs) {", //                     0
  "  const groups = new Map();", //                        1
  "  for (const word of strs) {", //                       2
  "    const key = [...word].sort().join('');", //         3
  "    if (!groups.has(key)) groups.set(key, []);", //     4
  "    groups.get(key).push(word);", //                    5
  "  }", //                                                6
  "  return [...groups.values()];", //                     7
  "}", //                                                  8
];
