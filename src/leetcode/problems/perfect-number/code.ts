export const CODE = [
  "function checkPerfectNumber(num) {", //                    0
  "  if (num <= 1) return false;", //                         1
  "  let sum = 1;   // 1 divides every num > 1", //           2
  "  for (let d = 2; d * d <= num; d++) {", //                3
  "    if (num % d === 0) {", //                              4
  "      sum += d;", //                                       5
  "      if (d !== num / d) sum += num / d;   // paired", //  6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return sum === num;", //                                 9
  "}", //                                                    10
];
