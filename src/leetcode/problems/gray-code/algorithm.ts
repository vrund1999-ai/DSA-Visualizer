import type { Step } from "@/core/types";

export interface GrayData {
  n: number;
  res: number[];
  i: number | null;
  /** bit position that flipped from the previous code */
  flipped: number | null;
  answer: number[] | null;
}

export type GrayStep = Step<GrayData>;

/**
 * The formula i XOR (i >> 1) maps successive integers to a reflected binary sequence in which each code
 * differs from the previous by exactly one bit — the carry pattern of counting cancels all but the
 * lowest changed bit. `line` indexes CODE.
 */
export function graySteps(n: number): GrayStep[] {
  const steps: GrayStep[] = [];
  const res: number[] = [];
  const total = 1 << n;

  const snap = (o: Partial<GrayData>): GrayData => ({ n, res: [...res], i: null, flipped: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GrayData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Generate 2^${n} = ${total} gray codes via i XOR (i >> 1).`);

  let prev = 0;
  for (let i = 0; i < total; i++) {
    const g = i ^ (i >> 1);
    res.push(g);
    const diff = g ^ prev;
    const flipped = i === 0 ? null : Math.log2(diff);
    push(4, i === 0 ? `Code 0 = ${g.toString(2).padStart(n, "0")}.` : `Code ${i} = ${g.toString(2).padStart(n, "0")} (bit ${flipped} flipped).`, { i, flipped });
    prev = g;
  }

  push(6, `Gray sequence: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
