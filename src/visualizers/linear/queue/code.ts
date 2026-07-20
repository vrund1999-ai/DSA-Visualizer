/** Displayed source. algorithm.ts indexes into this via each step's `line`. */
export const QUEUE_CODE = [
  "enqueue(x) {", //                              0
  "  items[rear++] = x;   // add at the rear", //1
  "}", //                                         2
  "dequeue() {", //                               3
  "  if (empty) throw 'underflow';", //           4
  "  return items[front++]; // from the front", //5
  "}", //                                         6
];
