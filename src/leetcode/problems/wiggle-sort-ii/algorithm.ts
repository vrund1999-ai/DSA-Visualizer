import type { Step } from "@/core/types";

export interface WiggleData {
  sorted: number[];
  mid: number;
  result: (number | null)[];
  /** index in `sorted` just consumed */
  from: number | null;
  /** index in result just filled */
  to: number | null;
  phase: "even" | "odd" | "done";
  answer: number[] | null;
}

export type WiggleStep = Step<WiggleData>;

/**
 * Sorting splits the values into a smaller and larger half. Filling even positions from the top of the
 * small half downward and odd positions from the top of the large half downward guarantees each odd slot
 * exceeds its neighbors — even with duplicates, because equal values are pushed far apart. `line` indexes CODE.
 */
export function wiggleSteps(nums: number[]): WiggleStep[] {
  const steps: WiggleStep[] = [];
  const sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;
  const mid = Math.floor((n + 1) / 2);
  const result: (number | null)[] = new Array(n).fill(null);

  const snap = (o: Partial<WiggleData>): WiggleData => ({ sorted, mid, result: [...result], from: null, to: null, phase: "even", answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<WiggleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Sort, then split at index ${mid}: small half [0, ${mid}), large half [${mid}, ${n}).`);

  let j = mid - 1;
  for (let i = 0; i < n; i += 2) {
    result[i] = sorted[j];
    push(6, `Even slot ${i} ← small-half ${sorted[j]} (from index ${j}).`, { from: j, to: i, phase: "even" });
    j--;
  }

  let k = n - 1;
  for (let i = 1; i < n; i += 2) {
    result[i] = sorted[k];
    push(9, `Odd slot ${i} ← large-half ${sorted[k]} (from index ${k}).`, { from: k, to: i, phase: "odd" });
    k--;
  }

  push(10, `Wiggle order: [${result.join(", ")}].`, { phase: "done", answer: result as number[] });
  return steps;
}
