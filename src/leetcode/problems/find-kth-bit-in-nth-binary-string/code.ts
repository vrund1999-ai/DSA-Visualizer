export const CODE = [
  "function findKthBit(n, k) {", //                           0
  "  let s = '0';               // S1", //                    1
  "  for (let i = 2; i <= n; i++) {", //                      2
  "    const inv = [...s]", //                                3
  "      .reverse()", //                                      4
  "      .map(c => (c === '0' ? '1' : '0'))", //              5
  "      .join('');", //                                      6
  "    s = s + '1' + inv;   // Si = S(i-1)+1+rev(inv)", //    7
  "  }", //                                                   8
  "  return s[k - 1];", //                                    9
  "}", //                                                    10
];
