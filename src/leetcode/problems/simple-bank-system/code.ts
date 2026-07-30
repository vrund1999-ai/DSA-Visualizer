export const CODE = [
  "class Bank {", //                                          0
  "  constructor(balance) { this.b = balance; }", //          1
  "  valid(a) { return a >= 1 && a <= this.b.length; }", //   2
  "  withdraw(a, money) {", //                                3
  "    if (!this.valid(a) || this.b[a-1] < money) return false;",//4
  "    this.b[a-1] -= money; return true;", //                5
  "  }", //                                                   6
  "  deposit(a, money) {", //                                 7
  "    if (!this.valid(a)) return false;", //                 8
  "    this.b[a-1] += money; return true;", //                9
  "  }", //                                                  10
  "  transfer(a1, a2, money) {", //                          11
  "    if (!this.valid(a2) || !this.withdraw(a1, money))", //12
  "      return false;", //                                  13
  "    this.b[a2-1] += money; return true;", //             14
  "  }", //                                                  15
  "}", //                                                    16
];
