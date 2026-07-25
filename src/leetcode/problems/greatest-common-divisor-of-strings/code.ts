export const CODE = [
  "function gcdOfStrings(str1, str2) {", //                   0
  "  // a divisor string exists only if they commute", //    1
  "  if (str1 + str2 !== str2 + str1) return '';", //        2
  "  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);", // 3
  "  const g = gcd(str1.length, str2.length);", //           4
  "  return str1.slice(0, g);   // the divisor prefix", //   5
  "}", //                                                     6
];
