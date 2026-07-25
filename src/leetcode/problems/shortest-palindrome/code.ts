export const CODE = [
  "function shortestPalindrome(s) {", //                      0
  "  const rev = [...s].reverse().join('');", //              1
  "  const combined = s + '#' + rev;", //                     2
  "  // KMP prefix function of `combined`", //                3
  "  const lps = new Array(combined.length).fill(0);", //     4
  "  for (let i = 1; i < combined.length; i++) {", //         5
  "    let j = lps[i - 1];", //                               6
  "    while (j && combined[i] !== combined[j]) j = lps[j-1];",//7
  "    if (combined[i] === combined[j]) j++;", //             8
  "    lps[i] = j;", //                                       9
  "  }", //                                                  10
  "  const k = lps[lps.length - 1];  // palindromic prefix",//11
  "  return rev.slice(0, s.length - k) + s;", //             12
  "}", //                                                    13
];
