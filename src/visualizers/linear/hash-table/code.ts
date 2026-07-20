/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const HASH_TABLE_CODE = [
  "insert(x) {", //                              0
  "  const i = hash(x);   // x % size", //       1
  "  buckets[i].push(x);  // chain on collision",//2
  "}", //                                         3
  "search(x) {", //                               4
  "  const i = hash(x);", //                      5
  "  for (const v of buckets[i])", //             6
  "    if (v === x) return true;", //             7
  "  return false;", //                           8
  "}", //                                         9
];
