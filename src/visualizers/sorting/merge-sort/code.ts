/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const MERGE_SORT_CODE = [
  "function mergeSort(a, lo, hi) {", //             0
  "  if (hi - lo <= 1) return;", //                 1
  "  const mid = (lo + hi) >> 1;", //               2
  "  mergeSort(a, lo, mid);", //                    3
  "  mergeSort(a, mid, hi);", //                    4
  "  merge(a, lo, mid, hi);", //                    5
  "}", //                                           6
  "function merge(a, lo, mid, hi) {", //            7
  "  const left = a.slice(lo, mid);", //            8
  "  const right = a.slice(mid, hi);", //           9
  "  let i = 0, j = 0, k = lo;", //                 10
  "  while (i < left.len && j < right.len)", //     11
  "    a[k++] = pickSmaller(left, right);", //      12
  "  while (i < left.len) a[k++] = left[i++];", //  13
  "  while (j < right.len) a[k++] = right[j++];", //14
  "}", //                                           15
];
