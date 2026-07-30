export const CODE = [
  "function calculateTax(brackets, income) {", //             0
  "  let tax = 0, prev = 0;", //                              1
  "  for (const [upper, percent] of brackets) {", //         2
  "    const taxable = Math.min(income, upper) - prev;", //   3
  "    if (taxable <= 0) break;   // income exhausted", //    4
  "    tax += taxable * percent / 100;", //                   5
  "    prev = upper;", //                                     6
  "  }", //                                                   7
  "  return tax;", //                                         8
  "}", //                                                     9
];
