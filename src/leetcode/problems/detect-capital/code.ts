export const CODE = [
  "function detectCapitalUse(word) {", //                     0
  "  const allCaps = word === word.toUpperCase();", //        1
  "  const allLower = word === word.toLowerCase();", //       2
  "  const titleCase =", //                                   3
  "    word[0] === word[0].toUpperCase() &&", //              4
  "    word.slice(1) === word.slice(1).toLowerCase();", //    5
  "  return allCaps || allLower || titleCase;", //            6
  "}", //                                                     7
];
