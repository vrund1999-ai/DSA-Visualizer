export const CODE = [
  "function isIsomorphic(s, t) {", //                            0
  "  const map1 = {}, map2 = {};", //                           1
  "  for (let i = 0; i < s.length; i++) {", //                  2
  "    const a = s[i], b = t[i];", //                           3
  "    if (map1[a] === undefined && map2[b] === undefined) {",// 4
  "      map1[a] = b; map2[b] = a;", //                         5
  "    } else if (map1[a] !== b || map2[b] !== a) {", //        6
  "      return false;", //                                     7
  "    }", //                                                   8
  "  }", //                                                     9
  "  return true;", //                                          10
  "}", //                                                       11
];
