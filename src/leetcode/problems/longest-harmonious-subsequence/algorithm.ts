import type { Step } from "@/core/types";

export interface HarmoniousData {
  nums: number[];
  count: [number, number][];
  /** the value v being paired with v+1 */
  v: number | null;
  hasNext: boolean | null;
  candidate: number | null;
  best: number;
  answer: number | null;
}

export type HarmoniousStep = Step<HarmoniousData>;

/**
 * A harmonious subsequence uses only two consecutive values v and v+1 (max − min = 1), so it can
 * include every occurrence of both. Counting values and, for each v that has a neighbor v+1, summing
 * their counts gives the best length. `line` indexes CODE.
 */
export function harmoniousSteps(nums: number[]): HarmoniousStep[] {
  const steps: HarmoniousStep[] = [];
  const count = new Map<number, number>();
  for (const n of nums) count.set(n, (count.get(n) ?? 0) + 1);
  let best = 0;

  const snap = (o: Partial<HarmoniousData>): HarmoniousData => ({ nums, count: [...count.entries()].sort((a, b) => a[0] - b[0]), v: null, hasNext: null, candidate: null, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HarmoniousData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, "Count each value; a harmonious subsequence pairs v with v+1.");

  for (const [v, c] of [...count.entries()].sort((a, b) => a[0] - b[0])) {
    if (count.has(v + 1)) {
      const candidate = c + count.get(v + 1)!;
      best = Math.max(best, candidate);
      push(7, `${v} (×${c}) + ${v + 1} (×${count.get(v + 1)}) = ${candidate} (best ${best}).`, { v, hasNext: true, candidate });
    } else {
      push(6, `${v} has no neighbor ${v + 1} → skip.`, { v, hasNext: false });
    }
  }

  push(9, `Longest harmonious subsequence: ${best}.`, { answer: best });
  return steps;
}
