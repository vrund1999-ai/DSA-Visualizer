import type { Step } from "@/core/types";

export interface KDistantData {
  nums: number[];
  key: number;
  k: number;
  /** the key occurrence currently expanding, if any */
  keyIndex: number | null;
  /** inclusive window [lo, hi] around the current key */
  window: [number, number] | null;
  /** distant indices collected so far */
  result: number[];
  answer: number[] | null;
}

export type KDistantStep = Step<KDistantData>;

/**
 * An index i is k-distant if some j within k of it holds the key value. For each occurrence of key we mark
 * the whole window [j−k, j+k]; the union (sorted) is the answer. `line` indexes CODE.
 */
export function kDistantSteps(nums: number[], key: number, k: number): KDistantStep[] {
  const steps: KDistantStep[] = [];
  const result = new Set<number>();

  const snap = (o: Partial<KDistantData>): KDistantData => ({
    nums,
    key,
    k,
    keyIndex: null,
    window: null,
    result: [...result].sort((a, b) => a - b),
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<KDistantData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Scan for value key = ${key}; each hit marks the window ±${k} around it.`);

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === key) {
      const lo = Math.max(0, j - k);
      const hi = Math.min(nums.length - 1, j + k);
      for (let i = lo; i <= hi; i++) result.add(i);
      push(6, `nums[${j}] = key → add indices ${lo}..${hi}.`, { keyIndex: j, window: [lo, hi] });
    }
  }

  const answer = [...result].sort((a, b) => a - b);
  push(9, `k-distant indices: [${answer.join(", ")}].`, { answer });
  return steps;
}
