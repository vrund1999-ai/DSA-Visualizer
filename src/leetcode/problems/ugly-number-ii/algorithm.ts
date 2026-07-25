import type { Step } from "@/core/types";

export interface UglyIIData {
  n: number;
  dp: number[];
  p2: number;
  p3: number;
  p5: number;
  /** the three candidate products this step */
  candidates: [number, number, number] | null;
  /** value just appended */
  chosen: number | null;
  answer: number | null;
}

export type UglyIIStep = Step<UglyIIData>;

/**
 * Every ugly number is a previous ugly number times 2, 3, or 5. Three pointers track the smallest
 * earlier ugly number not yet multiplied by each factor; the next ugly number is the minimum of
 * those three products, and we advance every pointer that produced it (to skip duplicates). `line` indexes CODE.
 */
export function uglyIISteps(n: number): UglyIIStep[] {
  const steps: UglyIIStep[] = [];
  const dp = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  const snap = (o: Partial<UglyIIData>): UglyIIData => ({ n, dp: [...dp], p2, p3, p5, candidates: null, chosen: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<UglyIIData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `dp[0] = 1. Build the first ${n} ugly numbers via ×2, ×3, ×5 pointers.`);

  while (dp.length < n) {
    const c2 = dp[p2] * 2;
    const c3 = dp[p3] * 3;
    const c5 = dp[p5] * 5;
    const next = Math.min(c2, c3, c5);
    dp.push(next);
    const advanced: string[] = [];
    if (next === c2) { p2++; advanced.push("p2"); }
    if (next === c3) { p3++; advanced.push("p3"); }
    if (next === c5) { p5++; advanced.push("p5"); }
    push(5, `min(${c2}, ${c3}, ${c5}) = ${next}. Append and advance ${advanced.join(", ")}.`, { candidates: [c2, c3, c5], chosen: next });
  }

  push(10, `The ${n}th ugly number is ${dp[n - 1]}.`, { answer: dp[n - 1] });
  return steps;
}
