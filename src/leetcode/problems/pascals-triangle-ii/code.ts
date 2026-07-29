export const CODE = [
  "function getRow(rowIndex) {", //                           0
  "  let row = [1];", //                                      1
  "  for (let r = 1; r <= rowIndex; r++) {", //               2
  "    const next = [1];", //                                 3
  "    for (let i = 1; i < row.length; i++)", //              4
  "      next.push(row[i - 1] + row[i]);   // sum above", //  5
  "    next.push(1);", //                                     6
  "    row = next;", //                                       7
  "  }", //                                                   8
  "  return row;", //                                         9
  "}", //                                                    10
];
