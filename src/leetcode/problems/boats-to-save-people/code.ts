export const CODE = [
  "function numRescueBoats(people, limit) {", //              0
  "  people.sort((a, b) => a - b);", //                       1
  "  let i = 0, j = people.length - 1, boats = 0;", //        2
  "  while (i <= j) {", //                                    3
  "    if (people[i] + people[j] <= limit) i++;   // pair", //4
  "    j--;   // the heaviest always boards", //              5
  "    boats++;", //                                          6
  "  }", //                                                   7
  "  return boats;", //                                       8
  "}", //                                                     9
];
