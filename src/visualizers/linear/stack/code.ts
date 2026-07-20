/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const STACK_CODE = [
  "push(x) {", //                              0
  "  items[top++] = x;   // add on top", //    1
  "}", //                                      2
  "pop() {", //                                3
  "  if (top === 0) throw 'underflow';", //    4
  "  return items[--top]; // from the top", // 5
  "}", //                                      6
];
