import type { Step } from "@/core/types";

export interface TribData {
  n: number;
  /** full sequence T0..Ti computed so far */
  seq: number[];
  /** index just computed */
  i: number | null;
  answer: number | null;
}

export type TribStep = Step<TribData>;

/**
 * Each Tribonacci number is the sum of the previous three, so we keep a sliding window of the last
 * three values and add them to produce the next. `line` indexes CODE.
 */
export function tribSteps(n: number): TribStep[] {
  const steps: TribStep[] = [];
  const seq: number[] = [0, 1, 1].slice(0, Math.max(1, Math.min(3, n + 1)));

  const snap = (o: Partial<TribData>): TribData => ({ n, seq: [...seq], i: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<TribData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "T0 = 0, T1 = 1, T2 = 1; each next term sums the previous three.");

  if (n <= 2) {
    push(2, `n = ${n} → T${n} = ${seq[n]}.`, { i: n, answer: seq[n] });
    return steps;
  }

  for (let i = 3; i <= n; i++) {
    const next = seq[i - 1] + seq[i - 2] + seq[i - 3];
    seq.push(next);
    push(6, `T${i} = T${i - 1} + T${i - 2} + T${i - 3} = ${seq[i - 1]} + ${seq[i - 2]} + ${seq[i - 3]} = ${next}.`, { i });
  }

  push(8, `T${n} = ${seq[n]}.`, { i: n, answer: seq[n] });
  return steps;
}
