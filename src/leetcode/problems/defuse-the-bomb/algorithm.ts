import type { Step } from "@/core/types";

export interface BombData {
  code: number[];
  k: number;
  /** index whose replacement is being computed */
  i: number | null;
  /** source indices summed into res[i] so far */
  window: number[];
  res: (number | null)[];
  answer: number[] | null;
}

export type BombStep = Step<BombData>;

/**
 * Each number is replaced by the circular sum of the k numbers after it (k > 0) or before it
 * (k < 0); k = 0 blanks everything to zero. Indices wrap with modular arithmetic so the array
 * behaves like a ring. `line` indexes CODE.
 */
export function bombSteps(code: number[], k: number): BombStep[] {
  const steps: BombStep[] = [];
  const n = code.length;
  const res: (number | null)[] = new Array(n).fill(null);

  const snap = (o: Partial<BombData>): BombData => ({ code, k, i: null, window: [], res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BombData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (k === 0) {
    for (let i = 0; i < n; i++) res[i] = 0;
    push(3, "k = 0 → every number becomes 0.", { answer: res.map((x) => x ?? 0) });
    return steps;
  }

  push(2, `Replace each number with the circular sum of ${Math.abs(k)} neighbor(s) ${k > 0 ? "after" : "before"} it.`);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    const window: number[] = [];
    for (let j = 1; j <= Math.abs(k); j++) {
      const idx = ((k > 0 ? i + j : i - j) + n) % n;
      sum += code[idx];
      window.push(idx);
    }
    res[i] = sum;
    push(7, `res[${i}] = sum of code[${window.join(", ")}] = ${sum}.`, { i, window });
  }

  push(10, `Decrypted code: [${res.join(", ")}].`, { answer: res.map((x) => x ?? 0) });
  return steps;
}
