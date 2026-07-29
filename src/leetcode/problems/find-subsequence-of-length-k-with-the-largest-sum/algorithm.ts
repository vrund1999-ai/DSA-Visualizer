import type { Step } from "@/core/types";

export interface MaxSubseqData {
  nums: number[];
  k: number;
  phase: "select" | "collect" | "done";
  /** indices chosen as the top-k values */
  keep: number[];
  /** index scanned during the collect phase */
  idx: number | null;
  res: number[];
  answer: number[] | null;
}

export type MaxSubseqStep = Step<MaxSubseqData>;

/**
 * To maximize the sum we simply keep the k largest values; the subsequence constraint only requires
 * their relative order be preserved. So we pick the top-k indices by value, then read them back in
 * original index order. `line` indexes CODE.
 */
export function maxSubseqSteps(nums: number[], k: number): MaxSubseqStep[] {
  const steps: MaxSubseqStep[] = [];
  const idxByValue = nums.map((_, i) => i).sort((a, b) => nums[b] - nums[a]);
  const keep = idxByValue.slice(0, k);
  const keepSet = new Set(keep);
  const res: number[] = [];

  const snap = (o: Partial<MaxSubseqData>): MaxSubseqData => ({ nums, k, phase: "select", keep: [...keep], idx: null, res: [...res], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MaxSubseqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Keep the ${k} largest values (indices ${keep.join(", ")}).`, { phase: "select" });

  for (let i = 0; i < nums.length; i++) {
    if (keepSet.has(i)) {
      res.push(nums[i]);
      push(6, `Index ${i} (value ${nums[i]}) is kept → append (preserving order).`, { phase: "collect", idx: i });
    }
  }

  push(7, `Result: [${res.join(", ")}].`, { phase: "done", answer: [...res] });
  return steps;
}
