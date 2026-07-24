import type { Step } from "@/core/types";

export interface OneBitsData {
  /** Current value's bits, high → low, over `width` columns. */
  bits: number[];
  width: number;
  value: number;
  count: number;
  clearedBit: number | null;
}

export type OneBitsStep = Step<OneBitsData>;

/**
 * Brian Kernighan's trick: `n & (n - 1)` clears the lowest set bit, so the loop
 * runs exactly once per 1-bit. Counting the iterations counts the set bits.
 * `line` indexes CODE.
 */
export function oneBitsSteps(input: number): OneBitsStep[] {
  const steps: OneBitsStep[] = [];
  const width = Math.max(8, input.toString(2).length);
  let n = input;
  let count = 0;

  const bitsOf = (v: number) => Array.from({ length: width }, (_, b) => (v >> (width - 1 - b)) & 1);
  const snap = (o: Partial<OneBitsData>): OneBitsData => ({ bits: bitsOf(n), width, value: n, count, clearedBit: null, ...o });
  const push = (line: number, explanation: string, data: OneBitsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [], metrics: { count } });
  };

  push(1, `Count set bits of ${input} (${input.toString(2)}) by clearing the lowest 1 each step.`, snap({}));

  while (n !== 0) {
    const lowest = n & -n;
    const clearedBit = width - 1 - Math.log2(lowest);
    n &= n - 1;
    count++;
    push(3, `Clear the lowest set bit → ${n.toString(2) || "0"}. Count = ${count}.`, snap({ clearedBit }));
  }

  push(6, `${input} has ${count} set bit(s).`, snap({}));
  return steps;
}
