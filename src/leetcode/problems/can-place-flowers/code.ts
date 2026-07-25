export const CODE = [
  "function canPlaceFlowers(bed, n) {", //                    0
  "  let count = 0;", //                                      1
  "  for (let i = 0; i < bed.length; i++) {", //             2
  "    if (bed[i] === 0 &&", //                               3
  "        (i === 0 || bed[i-1] === 0) &&", //                4
  "        (i === bed.length-1 || bed[i+1] === 0)) {", //     5
  "      bed[i] = 1; count++;   // plant here", //            6
  "    }", //                                                 7
  "  }", //                                                   8
  "  return count >= n;", //                                  9
  "}", //                                                    10
];
