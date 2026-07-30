export const CODE = [
  "function fractionToDecimal(num, den) {", //                0
  "  if (num % den === 0) return String(num / den);", //      1
  "  let res = (num < 0) !== (den < 0) ? '-' : '';", //       2
  "  num = Math.abs(num); den = Math.abs(den);", //           3
  "  res += Math.floor(num / den) + '.';", //                 4
  "  let rem = num % den;", //                                5
  "  const seen = new Map();   // remainder -> position", //  6
  "  let frac = '';", //                                      7
  "  while (rem !== 0) {", //                                 8
  "    if (seen.has(rem)) {   // cycle!", //                  9
  "      const p = seen.get(rem);", //                       10
  "      frac = frac.slice(0,p)+'('+frac.slice(p)+')';", //  11
  "      break;", //                                         12
  "    }", //                                                13
  "    seen.set(rem, frac.length);", //                      14
  "    rem *= 10;", //                                       15
  "    frac += Math.floor(rem / den);", //                   16
  "    rem %= den;", //                                      17
  "  }", //                                                  18
  "  return res + frac;", //                                 19
  "}", //                                                    20
];
