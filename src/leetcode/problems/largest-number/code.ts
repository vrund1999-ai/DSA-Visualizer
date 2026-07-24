export const CODE = [
  "function largestNumber(nums) {", //                        0
  "  const s = nums.map(String);", //                         1
  "  s.sort((a, b) =>", //                                    2
  "    (b + a).localeCompare(a + b));  // which order wins",//3
  "  if (s[0] === '0') return '0';   // all zeros", //        4
  "  return s.join('');", //                                  5
  "}", //                                                     6
];
