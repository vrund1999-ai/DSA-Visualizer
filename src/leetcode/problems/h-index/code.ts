export const CODE = [
  "function hIndex(citations) {", //                            0
  "  citations.sort((a, b) => b - a);   // descending", //     1
  "  let h = 0;", //                                           2
  "  while (h < citations.length &&", //                       3
  "         citations[h] > h) h++;   // paper h+1 ≥ h+1", //   4
  "  return h;", //                                            5
  "}", //                                                      6
];
