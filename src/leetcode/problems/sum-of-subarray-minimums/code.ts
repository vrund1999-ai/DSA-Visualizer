export const CODE = [
  "function sumSubarrayMins(arr) {", //                       0
  "  const MOD = 1e9 + 7, n = arr.length;", //                1
  "  const stack = [];   // increasing values", //           2
  "  let sum = 0;", //                                        3
  "  for (let i = 0; i <= n; i++) {", //                      4
  "    const cur = i < n ? arr[i] : -Infinity;", //          5
  "    while (stack.length &&", //                            6
  "           arr[stack.at(-1)] >= cur) {", //                7
  "      const mid = stack.pop();", //                        8
  "      const left = stack.length ? stack.at(-1) : -1;", //  9
  "      // arr[mid] is min of (mid-left)*(i-mid) subarrays",//10
  "      sum += arr[mid] * (mid - left) * (i - mid);", //    11
  "    }", //                                                12
  "    stack.push(i);", //                                   13
  "  }", //                                                  14
  "  return sum % MOD;", //                                  15
  "}", //                                                    16
];
