import type { Step } from "@/core/types";

export interface PowerFourData {
  n: number;
  /** bit values from most-significant (index 0) to least-significant */
  bits: { pos: number; value: number }[];
  /** bit position highlighted (the single set bit), or null */
  setPos: number | null;
  answer: boolean | null;
}

export type PowerFourStep = Step<PowerFourData>;

/**
 * n is a power of four iff it is positive, has exactly one set bit (a power of two → n & (n−1) == 0), and
 * that bit lies at an even position (matched by the mask 0x55555555). `line` indexes CODE.
 */
export function powerFourSteps(n: number): PowerFourStep[] {
  const steps: PowerFourStep[] = [];

  const width = Math.max(8, n > 0 ? Math.floor(Math.log2(n)) + 2 : 8);
  const bits = Array.from({ length: width }, (_, i) => {
    const pos = width - 1 - i;
    return { pos, value: (n >> pos) & 1 };
  });

  const snap = (o: Partial<PowerFourData>): PowerFourData => ({ n, bits, setPos: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PowerFourData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Test whether ${n} is a power of four using its binary form.`);

  if (n <= 0) {
    push(1, `${n} ≤ 0 → not a power of four.`, { answer: false });
    return steps;
  }

  if ((n & (n - 1)) !== 0) {
    const count = bits.filter((b) => b.value === 1).length;
    push(3, `${n} has ${count} set bits (n & (n−1) ≠ 0) → not even a power of two.`, { answer: false });
    return steps;
  }

  const setPos = Math.round(Math.log2(n));
  const even = setPos % 2 === 0;
  push(6, `Single bit at position ${setPos} (${even ? "even" : "odd"}) → ${even ? "power of four" : "not a power of four"}.`, {
    setPos,
    answer: even,
  });
  return steps;
}
