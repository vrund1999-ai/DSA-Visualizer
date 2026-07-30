export const CODE = [
  "function canConstruct(s, k) {", //                         0
  "  if (s.length < k) return false;   // not enough chars", //1
  "  const freq = {};", //                                    2
  "  for (const c of s) freq[c] = (freq[c] ?? 0) + 1;", //    3
  "  let odd = 0;", //                                        4
  "  for (const c in freq)", //                               5
  "    if (freq[c] % 2 === 1) odd++;   // needs its own center",//6
  "  return odd <= k;", //                                    7
  "}", //                                                     8
];
