export const CODE = [
  "function countStudents(students, sandwiches) {", //        0
  "  const want = [0, 0];", //                                1
  "  for (const s of students) want[s]++;   // preferences",//2
  "  for (let i = 0; i < sandwiches.length; i++) {", //       3
  "    const top = sandwiches[i];", //                        4
  "    if (want[top] === 0)", //                              5
  "      return sandwiches.length - i;   // stuck", //        6
  "    want[top]--;   // a student takes it", //              7
  "  }", //                                                   8
  "  return 0;   // everyone ate", //                         9
  "}", //                                                    10
];
