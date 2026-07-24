export const CODE = [
  "function minimumAbsDifference(arr) {", //                  0
  "  arr.sort((a, b) => a - b);", //                          1
  "  let min = Infinity;", //                                 2
  "  for (let i = 1; i < arr.length; i++)", //                3
  "    min = Math.min(min, arr[i] - arr[i - 1]);", //         4
  "  const res = [];", //                                     5
  "  for (let i = 1; i < arr.length; i++)", //                6
  "    if (arr[i] - arr[i - 1] === min)", //                  7
  "      res.push([arr[i - 1], arr[i]]);", //                 8
  "  return res;", //                                         9
  "}", //                                                    10
];
