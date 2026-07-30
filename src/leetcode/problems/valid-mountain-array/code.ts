export const CODE = [
  "function validMountainArray(arr) {", //                    0
  "  const n = arr.length;", //                               1
  "  let i = 0;", //                                          2
  "  while (i + 1 < n && arr[i] < arr[i + 1]) i++;   // up", //3
  "  if (i === 0 || i === n - 1) return false;", //           4
  "  while (i + 1 < n && arr[i] > arr[i + 1]) i++;   // down", //5
  "  return i === n - 1;   // reached the end", //            6
  "}", //                                                     7
];
