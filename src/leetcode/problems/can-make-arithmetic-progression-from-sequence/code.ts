export const CODE = [
  "function canMakeArithmetic(arr) {", //                     0
  "  arr.sort((a, b) => a - b);", //                          1
  "  const d = arr[1] - arr[0];", //                          2
  "  for (let i = 2; i < arr.length; i++)", //                3
  "    if (arr[i] - arr[i - 1] !== d)", //                    4
  "      return false;   // gap breaks the progression", //   5
  "  return true;", //                                        6
  "}", //                                                     7
];
